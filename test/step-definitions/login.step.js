const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const DashboardPage = require("../pages/dashboard.page");

Given(/^I am on the login page$/, async () => {
  await Page.open("/login"); // Navigate to the login page
  await browser.pause(1000);
});

When(/^I enter email "([^\s@]+@[^\s@]+\.[^\s@]+)" and password "(.+)"$/, async (email, password) => {
  await LoginPage.login(email, password); // Perform login action
});

Then(/^I should see an error message$/, async () => {
  await expect(LoginPage.errorMessage).toExist(); // Verify error message is displayed
  await expect(LoginPage.errorMessage).toHaveTextContaining("Kredensial yang Anda berikan salah"); // Verify the error message text
});

Then(/^I should be redirected to the dashboard page$/, async () => {
  await expect(browser).toHaveUrl("https://kasirdemo.vercel.app/dashboard"); // Verify the URL is the dashboard page

  // Verify the store name is displayed and contains the correct text
  await expect(DashboardPage.storeName).toExist();
  await expect(DashboardPage.storeName).toHaveTextContaining("tokotiki");
});
