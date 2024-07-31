// Open URL path
class Page {
  open(path) {
    return browser.url(path);
  }
}

module.exports = new Page();
