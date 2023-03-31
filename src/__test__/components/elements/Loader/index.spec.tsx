import { render } from "@testing-library/react";
import Loader from "@/components/elements/Loader";

describe("loader component", () => {
  it("render loader", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
