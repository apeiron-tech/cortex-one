import type { Meta, StoryObj } from "@storybook/react-vite";
import FrostedDiv from "./FrostedDiv";

const meta: Meta<typeof FrostedDiv> = {
  title: "refresh-components/FrostedDiv",
  component: FrostedDiv,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="p-12 bg-[var(--surface-window)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FrostedDiv>;

export const Default: Story = {
  args: {
    className: "p-4 surface-card rounded-12",
    children: (
      <span className="text-text-04 font-main-ui-action">Surface content</span>
    ),
  },
};
