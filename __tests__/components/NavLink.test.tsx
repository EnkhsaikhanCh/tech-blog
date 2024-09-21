import { render, screen } from "@testing-library/react";
import { NavLink } from "@/components/NavLink";
import "@testing-library/jest-dom"; // Importing the custom matchers

describe("NavLink", () => {
  it("renders the link with the provided label", () => {
    const label = "Home";
    const href = "/home";
    const pathname = "/";

    // Render the NavLink component
    render(<NavLink href={href} label={label} pathname={pathname} />);

    // Find the link by its text content
    const link = screen.getByRole("link", { name: label });

    // Assert that the link is in the document
    expect(link).toBeInTheDocument();

    // Assert that the href attribute is correct
    expect(link).toHaveAttribute("href", href);

    // Assert that the link is inactive (not the current pathname)
    expect(link).toHaveClass("text-muted-foreground");
    expect(link).not.toHaveClass("bg-accent text-foreground");
  });

  it("applies active styles when the pathname matches the href", () => {
    const label = "Home";
    const href = "/home";
    const pathname = "/home"; // Pathname matches href, so it should be active

    // Render the NavLink component
    render(<NavLink href={href} label={label} pathname={pathname} />);

    // Find the link by its text content
    const link = screen.getByRole("link", { name: label });

    // Assert that the link is in the document
    expect(link).toBeInTheDocument();

    // Assert that the link has the active styles
    expect(link).toHaveClass("bg-accent text-foreground");

    // Assert that the inactive class is not applied
    expect(link).not.toHaveClass("text-muted-foreground");
  });
});
