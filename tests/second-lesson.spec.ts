import { test, expect } from "@playwright/test";

test.describe("Auth Modal", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to home page before each test
    await page.goto("http://localhost:5173/");
  });

  test("should open login modal when clicking Sign in", async ({ page }) => {
    // Wait for the page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Click the Sign in button
    const signInButton = page.getByText("Sign in");
    await expect(signInButton).toBeVisible();
    await signInButton.click();

    // Verify login form elements
    const form = page.getByRole("form");
    await expect(form).toBeVisible();
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
  });

  test("should open register modal when clicking Get Started", async ({
    page,
  }) => {
    await page.waitForLoadState("networkidle");

    // Click Get Started
    const getStartedButton = page.getByText("Get Started", { exact: true });
    await expect(getStartedButton).toBeVisible();
    await getStartedButton.click();

    // Verify register form
    const form = page.getByRole("form");
    await expect(form).toBeVisible();
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("First Name")).toBeVisible();
    await expect(page.getByPlaceholder("Last Name")).toBeVisible();
    await expect(page.getByPlaceholder("Email")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
  });

  test("should switch between login and register screens", async ({ page }) => {
    await page.waitForLoadState("networkidle");

    // Open login modal
    await page.getByText("Sign in", { exact: true }).click();

    // Switch to register
    const registerLink = page.getByText("Register", { exact: true });
    await expect(registerLink).toBeVisible();
    await registerLink.click();
    await expect(page.getByText("Create a new account")).toBeVisible();

    // Switch back to login
    const loginLink = page.getByText("Login", { exact: true });
    await expect(loginLink).toBeVisible();
    await loginLink.click();
    await expect(page.getByText("Enter your credentials")).toBeVisible();
  });

  test("should close modal when clicking outside", async ({ page }) => {
    await page.waitForLoadState("networkidle");

    // Open modal
    await page.getByText("Sign in").click();
    await expect(page.getByRole("form")).toBeVisible();

    // Click outside the modal on the body element
    await page.click("body", { position: { x: 0, y: 0 } });

    // Verify modal is closed
    await expect(page.getByRole("form")).not.toBeVisible();
  });
});
