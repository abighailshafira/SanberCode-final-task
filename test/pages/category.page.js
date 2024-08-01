class CategoryPage {
  // Selector for the elements on the login page
  get buttonAdd() {
    return $("a[href='/categories/create']");
  }

  get inputName() {
    return $("#nama");
  }

  get inputDescription() {
    return $("#deskripsi");
  }

  get buttonSave() {
    return $("//button[contains(text(),'simpan')]");
  }

  get successMessage() {
    return $('//*[contains(text(),"item ditambahkan")]');
  }

  get listCategory() {
    return $("//table/tbody/tr[1]/td[1]");
  }

  // Method to navigate to create category page
  async navigateToCreateCategoryPage() {
    await this.buttonAdd.click();
  }

  // Method to create a new category
  async createCategory(name, description) {
    await this.inputName.setValue(name);
    await this.inputDescription.setValue(description);
    await this.buttonSave.click();
  }
}

module.exports = new CategoryPage();
