import puppeteer from "puppeteer";

jest.setTimeout(40000);

// test("first website", async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("http://info.cern.ch/hypertext/WWW/TheProject.html");
//   const pageTitle = await page.title();
//   expect(pageTitle).toEqual("The World Wide Web project");
//   await browser.close();
// });

test("wikipedia search", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org");
  await page.click('#searchInput');
  await page.keyboard.type("puppeteer");
  await page.click('#searchButton');
  // await page.keyboard.press("Enter"); // would trigger full-text search
  await page.waitForNavigation();
  const paragraphText = await page.$eval("p", (element) => element.textContent);
  console.log(paragraphText);
  expect(paragraphText).toMatch(/puppeteer/i);
  await browser.close();
});
