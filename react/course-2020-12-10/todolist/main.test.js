const puppeteer = require("puppeteer");

test("first website", async () => {
  jest.setTimeout(20000);
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://info.cern.ch/hypertext/WWW/TheProject.html");
  const pageTitle = await page.title();
  expect(pageTitle).toEqual("The World Wide Web project");
});

test("todo app", async () => {
  jest.setTimeout(20000);
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  const pageTitle = await page.title();
  expect(pageTitle).toEqual("Todos (200)");
});
