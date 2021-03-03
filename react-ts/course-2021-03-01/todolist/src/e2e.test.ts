import puppeteer from "puppeteer";

jest.setTimeout(20000);

let browser: puppeteer.Browser;
let page: puppeteer.Page;
beforeAll(async () => {
  browser = await puppeteer.launch({ timeout: 20000 });
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

test("adding a todo", async () => {
  const numLis = await page.$$eval("li", (elements) => elements.length);
  expect(numLis).toEqual(0);

  await page.click("input");
  await page.keyboard.type("test");
  const submitBtn = await page.$('button[type="submit"]');
  await (submitBtn as any).click();
  const newNumLis = await page.$$eval("li", (elements) => elements.length);
  expect(newNumLis).toEqual(1);
});
