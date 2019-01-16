// maxlength >= 3

let shorten = (text, maxlength) => {
  if (text.length <= maxlength) {
    return text;
  }
  // text too long
  return text.slice(0, maxlength-3) + '...';
};

export default shorten;
