const shorten = (text, maxlength) => {
  if (maxlength <= 3) {
    throw new Error('maxlength must be >= 4')
  }
  if (text.length <= maxlength) {
    return text;
  }
  return text.slice(0, maxlength-3) + '...';
}

export default shorten;