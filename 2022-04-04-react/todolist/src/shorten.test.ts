import shorten from "./shorten";

it("shortens 'loremipsum' to 'lor...' with max length 6", () => {
  const result = shorten("loremipsum", 6);
  expect(result).toEqual("lor...");
});
