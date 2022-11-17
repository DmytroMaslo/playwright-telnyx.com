
exports.MainPage = class MainPage {
  constructor(page) {
    this.page = page;
    this.closeAndDeny = page.locator('[aria-label="close and deny"]');
  }

  async goto() {
    await this.page.goto('/');
  }
  async closeModal() {
    await this.closeAndDeny.click();
  }
}
