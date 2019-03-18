const shorten = (text: string, maxlength: number): string => {
  if (text.length <= maxlength) {
    return text;
  } else if (maxlength <= 3) {
    throw new Error('Input string too short.')
  }
  return text.slice(0, maxlength-3) + '...'
};

export default shorten;
