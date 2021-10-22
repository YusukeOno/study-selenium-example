const { Builder } = require("selenium-webdriver");
const fs = require("fs");

(async function myFunction() {
  let driver = await new Builder().forBrowser("safari").build();
  //your code inside this block
  await driver.get("https://www.yahoo.co.jp");
  await driver.manage().window().setRect({ width: 1010, height: 6503 });
  const base64 = await driver.takeScreenshot();
  const buffer = Buffer.from(base64, "base64");
  fs.writeFileSync("screenshot.jpg", buffer);
  await driver.quit();
})();
