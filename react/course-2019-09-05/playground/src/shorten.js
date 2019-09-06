const shorten = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength-3) + "...";
};

export default shorten;
