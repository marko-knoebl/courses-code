// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

import puppeteer from "puppeteer";

test("displays page with title 'React App'", async () => {
  jest.setTimeout(20000);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  const pageTitle = await page.title();
  expect(pageTitle).toEqual("React App");
  browser.close();
});

test("adds a new todo item", async () => {
  jest.setTimeout(20000);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const input = await page.$("input");
  await input.type("some title");
  const submitBtn = await page.$("button");
  await submitBtn.click();

  const lastLiContent = await page.$eval(
    "li:last-child",
    (element) => element.innerHTML
  );
  expect(lastLiContent).toMatch(/some title/);
  browser.close();
}, 20000);
