export default (text, maxLength) => {
  if (maxLength <= 0) {
    throw new Error('maxLength must be > 0');
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '…';
};
