const puppeteer = require('puppeteer');
const fs = require('fs');
const data = require('../data.json');
const test = data[0];
(
  async () => {
    const width = 1440;
    const height = 900;

    const browser = await puppeteer.launch(
      {
        'defaultViewport': {'width': width, 'height': height},
        headless: false,
        slowMo: 10
      }
    );

    let page = await browser.newPage();
    // await page.goto('https://admin.google.com');
    // await page.type('#identifierId',"mandy.luk@bindo.com", {delay: 0});
    // await page.click('#identifierNext');
    // await page.waitForNavigation();
    // const password = await page.evaluate(() => document.querySelector('input[name="password"'));
    // let bodyHTML = await page.evaluate(() => document.innerHTML);
    // fs.writeFileSync('./goog.html', bodyHTML)
    // const password = await page.$('#password');
    // console.log('aaaaa', password);
    // await password.type("Lgr199212");
    // await page.click('#passwordNext');
    // await page.waitForNavigation();

    await page.setCookie(...cookies);
    // await page.goto("https://admin.google.com/AdminHome?fral=1#GroupList:")
    await page.goto("https://admin.google.com/ac/groups/01v1yuxt4045u63/members?fc=true")
    // await page.evaluate(() => document.querySelector('[aria-label="添加成员"]').click())
    // await page.waitForSelector('[aria-label="添加成员"]');
    // await page.hover('[aria-label="添加成员"]');
    // const add = await page.evaluate(() => document.querySelector('[aria-label="添加成员"]'))
    // await add.hover();
    // await add.click();
    await page.click(`[aria-label="添加成员"]`);
    // await page.click('[aria-label="Find a user or group"]');
    await wait(2000);
    await page.keyboard.type(test.email); // Types instantly
    await wait(10000);
    await page.waitForSelector('#nngdp85');
    await page.click('#nngdp85');
    await page.click('[data-id="ssJRIf"]');
  }
)();

function wait(s) {
  return new Promise((resovle) => {
    setTimeout(() => { resovle() }, s);
  })
}

const cookies = [
  {
    "domain": ".admin.google.com",
    "expirationDate": 1611047106,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utma",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "205229632.1029829472.1547401690.1547973157.1547975106.4",
    "id": 1
  },
  {
    "domain": ".admin.google.com",
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmc",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "205229632",
    "id": 2
  },
  {
    "domain": ".admin.google.com",
    "expirationDate": 1563743106,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmz",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "205229632.1547975106.4.3.utmcsr=accounts.google.com|utmccn=(referral)|utmcmd=referral|utmcct=/signin/v2/sl/pwd",
    "id": 3
  },
  {
    "domain": ".admin.google.com",
    "expirationDate": 1611069344,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_ga",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.3.1029829472.1547401690",
    "id": 4
  },
  {
    "domain": ".admin.google.com",
    "expirationDate": 1547997404,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_gat_UA806539331",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1",
    "id": 5
  },
  {
    "domain": ".admin.google.com",
    "expirationDate": 1548083744,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_gid",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.3.1054614553.1547971129",
    "id": 6
  },
  {
    "domain": ".google.com",
    "expirationDate": 1550589343,
    "hostOnly": false,
    "httpOnly": false,
    "name": "1P_JAR",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "2019-1-20-15",
    "id": 7
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611069339.00899,
    "hostOnly": false,
    "httpOnly": false,
    "name": "APISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "lzfECUaQ_qu1p1e3/AXt9VVE7th3AEOsqb",
    "id": 8
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611069339.008723,
    "hostOnly": false,
    "httpOnly": true,
    "name": "HSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "A-RdYisR3h1zpmvM0",
    "id": 9
  },
  {
    "domain": ".google.com",
    "expirationDate": 1563808539.009578,
    "hostOnly": false,
    "httpOnly": true,
    "name": "NID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "156=TeC89jbLWswWqTxX-8XczYhU-i-p6gw9pX__Tu29ERYCTVK3p3t9P2iwkICvYuO9GlUTjL6Rs9qQMxQLzdlhBYXJUwCIIAbHgTqBhztAmwbmqqRyna95Ph4JpJoI06Y7q8milznroAgVaiBY0VzUMXvBn6IwsaJRltuLblSSjq1K0594K6p8zY6W2laY2pT7h2gVcM13tmLSfBmUqOYLhb1ps5EEGSVpPPGjGbMe9ZrlZQ1rVE3v2S1diPcOM4_mkdtEYnDtVfN68w",
    "id": 10
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611069339.009186,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SAPISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "Adur2yImSKa4Pa0j/AUneXzwFbYE_e_L5p",
    "id": 11
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611069339.008369,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "-QapG_unb-WEtbkf5tGc2HFI1EQtchzqZ_UNYgQPJOjYvFHAQNH6lfv59tcxxRkfbCfl_Q.",
    "id": 12
  },
  {
    "domain": ".google.com",
    "expirationDate": 1555773345.830337,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SIDCC",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "ABtHo-H8K7j0jHdipkEcf1tOU_Kuoq7koifX4Ub_Ly_VrgiX8LQb4woMpeI6b7l7UFW-3o6kIo4",
    "id": 13
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611069339.008819,
    "hostOnly": false,
    "httpOnly": true,
    "name": "SSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "AvNRte4ckgSBqymdl",
    "id": 14
  },
  {
    "domain": "admin.google.com",
    "expirationDate": 1611045151.315872,
    "hostOnly": true,
    "httpOnly": true,
    "name": "CPH_SID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "-QapGxAkRq2xZVUvn_0NQ0GKdWzacbdIsDuF4N45bxhXL1zvnYfXX4LvPJv5RvocgZCvdg.",
    "id": 15
  },
  {
    "domain": "admin.google.com",
    "expirationDate": 1550567106,
    "hostOnly": true,
    "httpOnly": false,
    "name": "enabledapps.uploader",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "0",
    "id": 16
  },
  {
    "domain": "admin.google.com",
    "expirationDate": 1550563129,
    "hostOnly": true,
    "httpOnly": false,
    "name": "OTZ",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "4761119_24_24__24_",
    "id": 17
  }
]