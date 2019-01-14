const puppeteer = require('puppeteer');

(
  async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 500
    });
    const page = await browser.newPage();
    await page.goto('https://login.microsoftonline.com');
    await page.type('#i0116',"woo.yupeng@gmail.com", {delay: 0});
    await page.click('#idSIButton9');
    await page.waitForNavigation()
    await page.type('#i0118',"jnuphymi360");
    await page.click('#idSIButton9');
    await page.waitForNavigation()
    await page.goto('https://outlook.com/');
    await page.waitForNavigation()

    // await page.click('#idBtn_Back');


    // await browser.close();
  }
)();
