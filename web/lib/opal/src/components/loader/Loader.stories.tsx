import type { Meta, StoryObj } from "@storybook/react-vite";
import { CortexLoader } from "@opal/components";

const meta: Meta<typeof CortexLoader> = {
  title: "opal/components/Loader",
  component: CortexLoader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// CortexLoader: the branded C-ring spin with a pulsing core.

export const CortexMark: Story = {
  render: () => <CortexLoader />,
};

export const CortexSizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <CortexLoader size={24} />
      <CortexLoader size={40} />
      <CortexLoader size={64} />
    </div>
  ),
};

export const CortexColors: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <CortexLoader />
      <CortexLoader color="text-04" />
      <CortexLoader color="status-error-05" />
    </div>
  ),
};

// color="inherit" applies no class, so the mark takes the ambient text color.
export const Inherit: Story = {
  render: () => (
    <div className="flex items-center gap-6 text-status-error-05">
      <CortexLoader color="inherit" />
    </div>
  ),
};
