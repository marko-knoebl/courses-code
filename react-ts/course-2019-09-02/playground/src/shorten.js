function shorten(s, maxlen) {
  if (s.length > maxlen) {
    return s.slice(0, maxlen - 3) + "...";
  }
  return s;
}

export default shorten;
