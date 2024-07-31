class DashboardPage {
  // Selector for the elements on the dashboard page
  get storeName() {
    return $("//dd[text()='hai']//preceding-sibling::dt");
  }
}

module.exports = new DashboardPage();
