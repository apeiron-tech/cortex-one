/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { useCurrentUser } from "@/lib/users/hooks";
import { SWR_KEYS } from "@/lib/swr-keys";
import { errorHandlingFetcher } from "@/lib/fetcher";

jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  usePathname: jest.fn(),
}));

jest.mock("@/lib/fetcher", () => ({
  errorHandlingFetcher: jest.fn(),
}));

const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>;
const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

function swrResult() {
  return {
    data: undefined,
    error: undefined,
    mutate: jest.fn(),
    isValidating: false,
    isLoading: true,
  } as unknown as ReturnType<typeof useSWR>;
}

describe("useCurrentUser", () => {
  beforeEach(() => {
    mockUseSWR.mockReset();
    mockUsePathname.mockReset();
    mockUseSWR.mockReturnValue(swrResult());
  });

  test("does not fetch /api/me on auth routes", () => {
    mockUsePathname.mockReturnValue("/auth/login");
    const { result } = renderHook(() => useCurrentUser());

    expect(mockUseSWR).toHaveBeenCalledWith(
      null,
      errorHandlingFetcher,
      expect.any(Object)
    );
    expect(result.current.user).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.userError).toBeUndefined();
  });

  test("fetches /api/me on app routes", () => {
    mockUsePathname.mockReturnValue("/app");
    renderHook(() => useCurrentUser());

    expect(mockUseSWR).toHaveBeenCalledWith(
      SWR_KEYS.me,
      errorHandlingFetcher,
      expect.objectContaining({
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
        dedupingInterval: 300_000,
      })
    );
  });
});
