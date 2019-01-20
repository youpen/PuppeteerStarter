const puppeteer = require('puppeteer');
const fs = require('fs');
(
  async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 10
    });
    let page = await browser.newPage();
    await page.goto('https://login.microsoftonline.com');
    await page.type('#i0116',"mandy.lu@bindo.co", {delay: 0});
    await page.click('#idSIButton9');
    await page.waitForNavigation();
    await page.type('#i0118',"Lu199212");
    await page.click('#idSIButton9');
    await page.waitForNavigation();
    await page.click('#idBtn_Back');
    // const newPage = await browser.newPage();
    await page.goto("https://outlook.office365.com/owa/?realm=bindo.co&exsvurl=1&ll-cc=2052&modurl=0");
    // await page.waitForNavigation();
    // await page.click('#ShellMail_link');

    // const a = '[aria-label="键入组的名称"]';
    await wait(5000);
    // const a = await browser.pages();
    // const newPage = a[0];
    // await page.waitForXPath("//div[@role=\"treeitem\" and @class=\"treeHeaderContainer\"]")
    // const ttt = await page.evaluate(() => document.querySelector('html'));
    // console.log(ttt);
    // let bodyHTML = await page.evaluate(() => document.innerHTML);
    // const a = await page.$x("//div[@role=\"treeitem\" and @class=\"treeHeaderContainer\"]");
    let primaryContainer = await page.evaluate(() => document.querySelector('.treeHeaderContainer'));
    console.log(primaryContainer);
    // console.log('bbbb', a);
    // fs.writeFileSync('./outlook.html', bodyHTML)
    // await page.setContent('<iframe></iframe>');
    // const frameList = page.frames();
    // for (let i = 0; i < frameList.length; i++ ) {
    //   const iframe = frameList[i];
    //   const dom = await iframe.$(a);
    //   console.warn('=======', dom);
    //   if (!dom) {
    //     continue
    //   } else {
    //     break;
    //   }
    // }
    // console.warn('111111111')
    // await page.hover('[title="创建"]');
    // await page.click('[title="创建"]');
    // await page.click("div._mgn_q1 > button");
    // await page.type(, 'aaaaa')
    // await page.waitForSelector(a)
    // const t = await page.$$(a);
    // console.warn(t)
    // console.warn('222222')
    // await page.waitForNavigation()

    // await browser.close();
  }
)();

function wait(s) {
  return new Promise((resovle) => {
    setTimeout(() => { resovle() }, s);
  })
}
