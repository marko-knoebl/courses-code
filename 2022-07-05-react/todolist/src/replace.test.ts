// Testen der eingebauten .replace-Methode von strings

describe(".replace", () => {
  test("changes 'marko' to 'm@rko'", () => {
    const original = "marko";
    const target = "m@rko";
    const result = original.replace("a", "@");

    expect(result).toEqual(target);
  });

  test("changes 'ababab' to '@babab'", () => {
    expect("ababab".replace("a", "@")).toEqual("@babab");
  });
});

describe(".replaceAll", () => {
  test("changes 'ababab' to '@b@b@b'", () => {
    expect("ababab".replaceAll("a", "@")).toEqual("@b@b@b");
  });
});

export {};
