module.exports = {
  "My first test case"(browser) {
    browser
      .url("https://www.trojmiasto.pl/")
      .waitForElementVisible("#cntSidebar > div.bx.bxWiadomosci > div > h2 > a")
      .assert.containsText("#cntSidebar > div.bx.bxWiadomosci > div > h2 > a", "Wiadomości", "Znalezione!");
  },
};
