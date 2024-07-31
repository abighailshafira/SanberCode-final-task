class LoginPage {
  // Selector for the elements on the login page
  get inputEmail() {
    return $("#email");
  }

  get inputPassword() {
    return $("#password");
  }

  get buttonLogin() {
    return $("button[type='submit']");
  }

  get errorMessage() {
    return $("div[role='alert']");
  }

  // Method to perform login
  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.buttonLogin.click();
  }
}

module.exports = new LoginPage();
