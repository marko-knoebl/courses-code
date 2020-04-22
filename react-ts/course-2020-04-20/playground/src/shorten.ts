function shorten(text: string, maxlength: number): string {
  if (maxlength < 3) {
    return ".".repeat(maxlength);
  } else if (text.length <= maxlength) {
    return text;
  }
  return text.slice(0, maxlength - 3) + "...";
}

export default shorten;
