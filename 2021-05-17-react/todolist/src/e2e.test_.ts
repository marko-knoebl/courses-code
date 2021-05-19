import puppeteer from "puppeteer";

let browser: puppeteer.Browser;
let page: puppeteer.Page;

jest.setTimeout(15000);

beforeAll(async () => {
  browser = await puppeteer.launch();
});
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});
afterAll(async () => {
  await browser.close();
});

test("displays page with title 'React App'", async () => {
  const pageTitle = await page.title();
  expect(pageTitle).toEqual("React App");
});

test("displays page with two li elements", async () => {
  const numLiElements = await page.$$eval("li", (elements) => elements.length);
  expect(numLiElements).toEqual(2);
});
