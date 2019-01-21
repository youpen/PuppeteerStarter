const puppeteer = require('puppeteer');
const fs = require('fs');
const data = require('./raw.json');
const test = data[0];
(
  async () => {
    const width = 1500;
    const height = 1000;

    const browser = await puppeteer.launch(
      {
        'defaultViewport': {'width': width, 'height': height},
        headless: false,
        slowMo: 10
      }
    );

    let page = await browser.newPage();
    page.setDefaultNavigationTimeout( 90000 );
    await page.setCookie(...cookies);
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      let email = item[3];
      email=email.substring(0,email.length-1);
      console.log('email', email);

      await page.goto(item[7]);
      await page.click(`[aria-label="添加成员"]`);
      await wait(2000);

      // await page.type('', email); // Types instantly
      await page.type('[aria-label="Find a user or group"],[aria-label="查找用户或群组"]', email); // Types instantly
      await page.waitForSelector(`[data-id="${email}"]`, {timeout: 90000});
      await page.click(`[data-id="${email}"]`);
      await page.click('[data-id="ssJRIf"]');
      await wait(3000)
    }

  }
)();

function wait(s) {
  return new Promise((resovle) => {
    setTimeout(() => { resovle() }, s);
  })
}

const cookies = [
  {
    "domain": ".google.com",
    "expirationDate": 1550666949,
    "hostOnly": false,
    "httpOnly": false,
    "name": "1P_JAR",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "2019-1-21-12",
    "id": 1
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611146941.497903,
    "hostOnly": false,
    "httpOnly": false,
    "name": "APISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "iTHCQbk3AtJJ8YcS/AL46of0MCGzyRfxb6",
    "id": 2
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611146941.497786,
    "hostOnly": false,
    "httpOnly": true,
    "name": "HSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "A1tqn_NnI7p-53afl",
    "id": 3
  },
  {
    "domain": ".google.com",
    "expirationDate": 1563886141.498179,
    "hostOnly": false,
    "httpOnly": true,
    "name": "NID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "156=iu2-OaYSnQM0mKwDi-ZP7LhXPMpULPhiZVzFTx8bZu2I92lV1OAYkNdvSBQfimprTwxDhtHqWdnX3Wxjjjd5584ZzjxsGq6cue4obs4RG9DVUmCB4QYwHzZfC19lQwZEuCREL1lPnAryJtMIco3ArvYsi6yYYzMEEX7QkDDSpfs",
    "id": 4
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611146941.497967,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SAPISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "vXOqiMCoGRrgNMrN/ACYhG_fj2LonMcvvK",
    "id": 5
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611146941.497501,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "-gapG8mKWnpWmLySZ85P8SIMB79sqeQ4BlfRaFaKnGbzHMkj3ylgFpTzZEzQaQr2JYn9eA.",
    "id": 6
  },
  {
    "domain": ".google.com",
    "expirationDate": 1555850952.7922,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SIDCC",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "ABtHo-EUQdR24YNswQI1Ajujw2QYABhBVhZO394suOtEmuiF1yA1wHXkYrz0dbJ2vl2rY6Gr4A",
    "id": 7
  },
  {
    "domain": ".google.com",
    "expirationDate": 1611146941.497837,
    "hostOnly": false,
    "httpOnly": true,
    "name": "SSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "A5Qwa8MnbHVQ7qW4T",
    "id": 8
  },
  {
    "domain": ".myaccount.google.com",
    "expirationDate": 1608976110,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utma",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "245730968.369323820.1537862993.1537862993.1545904108.2",
    "id": 9
  },
  {
    "domain": ".myaccount.google.com",
    "expirationDate": 1561672110,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmz",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "245730968.1545904108.2.2.utmcsr=Web|utmccn=interstitial|utmcmd=Web",
    "id": 10
  },
  {
    "domain": "myaccount.google.com",
    "expirationDate": 1611146947.027845,
    "hostOnly": true,
    "httpOnly": true,
    "name": "OSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "-gapGwwUSD8B5QkWY5IzVu9SyvCR9IW-2ylDHYLdK1uT87gm8S7YbuJRYZGekBdtMPtsyg.",
    "id": 11
  },
  {
    "domain": "myaccount.google.com",
    "expirationDate": 1548496108,
    "hostOnly": true,
    "httpOnly": false,
    "name": "OTZ",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "4726668_24_24__24_",
    "id": 12
  }
]
