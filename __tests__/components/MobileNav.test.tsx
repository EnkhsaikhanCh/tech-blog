import { render, screen } from "@testing-library/react";
import { MobileNav } from "@/components/MobileNav";
import "@testing-library/jest-dom";

jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
});

jest.mock("../../src/config/docs", () => ({
  docsConfig: {
    mainNav: [
      { title: "Home", href: "/" },
      { title: "Docs", href: "/docs" },
    ],
  },
}));

describe("MobileNav", () => {
  const mockToggleMenu = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the navigation menu hidden when isOpen is false", () => {
    render(<MobileNav toggleMenu={mockToggleMenu} isOpen={false} />);

    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass("-translate-y-full");
  });

  it("renders the navigation menu visible when isOpen is true", () => {
    render(<MobileNav toggleMenu={mockToggleMenu} isOpen={true} />);

    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass("translate-y-0");
  });
});
