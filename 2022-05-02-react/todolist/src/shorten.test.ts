import shorten from "./shorten";

test("shortens 'loremipsum' to 'lor...' with maxlength 6", () => {
  const result = shorten("loremipsum", 6);
  expect(result).toEqual("lor...");
});
