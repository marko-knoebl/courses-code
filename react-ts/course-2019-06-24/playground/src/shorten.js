const shorten = (text, maxlength) => {
  if (maxlength < 0) {
    throw new Error("maxlength must not be negative");
  }
  if (text.length <= maxlength) {
    return text;
  }
  return text.slice(0, maxlength - 3) + "...";
}

export default shorten;
