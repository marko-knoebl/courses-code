import puppeteer from "puppeteer";

jest.setTimeout(20000)

let browser: puppeteer.Browser;
let page: puppeteer.Page;
beforeAll(async () => {
  browser = await puppeteer.launch({ timeout: 20000 });
});
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://en.wikipedia.org");
});
afterAll(async () => {
  await browser.close();
});

test("wikipedia title", async () => {
  const pageTitle = await page.title();
  expect(pageTitle).toMatch(/Wikipedia/);
});

test("wikipedia search", async () => {
  await page.click("#searchInput");
  await page.keyboard.type("puppeteer");
  await page.click("#searchButton");
  await page.waitForNavigation();
  const paragraphText = await page.$eval("p", (element) => element.textContent);
  console.log(paragraphText);
  expect(paragraphText).toMatch(/puppeteer/i);
});
