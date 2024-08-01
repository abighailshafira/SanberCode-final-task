const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const CategoryPage = require("../pages/category.page");
const DashboardPage = require("../pages/dashboard.page");

Given(/^I am logged in and on the category page$/, async () => {
  await Page.open("/login"); // Navigate to the login page
  await browser.pause(1000);
  await LoginPage.login("tokotiki@gmail.com", "password"); // Perform login action
  await DashboardPage.navigateToCategoryPage(); // Navigate to the category page
  await expect(browser).toHaveUrl("https://kasirdemo.vercel.app/categories"); // Verify the URL is the category page
  await browser.pause(1000);
});

When(/^I click add button$/, async () => {
  await CategoryPage.navigateToCreateCategoryPage();
  await expect(browser).toHaveUrl("https://kasirdemo.vercel.app/categories/create"); // Verify the URL is the category page
  await browser.pause(1000);
});

When(/^I enter name "([^"]*)" and description "([^"]*)"$/, async (name, description) => {
  await CategoryPage.createCategory(name, description); // Perform create category action
});

Then(/^I should see a success message$/, async () => {
  await expect(CategoryPage.successMessage).toBeDisplayed(); // Verify success message is displayed
  await expect(CategoryPage.successMessage).toHaveTextContaining("item ditambahkan"); // Verify the success message text
});

Then(/^I should see "([^"]*)" in the category list$/, async (name) => {
  // await browser.refresh();
  await expect(CategoryPage.listCategory).toHaveTextContaining(name); // Verify new category is in the list
  await browser.pause(1000);
});
