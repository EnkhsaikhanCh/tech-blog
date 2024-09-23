import { render, screen } from "@testing-library/react";
import { ActionButtonComponent } from "../../src/app/[username]/_components/ActionButtonComponent";
import "@testing-library/jest-dom";

describe("ActionButtonComponent", () => {
  const href = "/";

  it("renders the button and contains the correct text", () => {
    render(<ActionButtonComponent href={href} />);

    const button = screen.getByRole("button", { name: /back to articles/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Back to Articles");
  });

  it("render the correct link", () => {
    render(<ActionButtonComponent href={href} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", href);
  });
});
