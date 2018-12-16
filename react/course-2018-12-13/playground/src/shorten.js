const shorten = (s, maxlength) => {
  if (s.length > maxlength) {
    return s.slice(0, maxlength - 3) + '...';
  }
  return s;
};

export default shorten;
