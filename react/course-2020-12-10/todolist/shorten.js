// export default

module.exports = (s, maxlength) =>
  s.length > maxlength ? s.slice(0, maxlength - 3) + "..." : s;
