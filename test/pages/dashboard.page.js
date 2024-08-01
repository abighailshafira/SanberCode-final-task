class DashboardPage {
  // Selector for the elements on the dashboard page
  get storeName() {
    return $("//dd[text()='hai']//preceding-sibling::dt");
  }

  get menuCategory() {
    return $("a[href='/categories']");
  }

  // Method to navigate to category page
  async navigateToCategoryPage() {
    await this.menuCategory.click();
  }
}

module.exports = new DashboardPage();
