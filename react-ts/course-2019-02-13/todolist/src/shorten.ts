const shorten = (text: string, maxlength: number): string => {
  if (text.length <= maxlength) {
    return text;
  }
  return text.slice(0, maxlength - 3) + '...';
};

export default shorten;
