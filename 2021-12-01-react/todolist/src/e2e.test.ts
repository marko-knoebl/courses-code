import puppeteer from "puppeteer";

let browser: puppeteer.Browser;
let page: puppeteer.Page;
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

test("has two todos inside of <li> elements", async () => {
  const numLis = await page.$$eval("li", (elements) => elements.length);
  expect(numLis).toEqual(2);
});
