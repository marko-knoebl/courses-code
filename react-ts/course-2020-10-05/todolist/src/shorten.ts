/**
 * shortens a given string to a specified length,
 * adding "..." at the end if it was shortened
 */
const shorten = (s: string, maxlength: number) =>
  s.length > maxlength ? s.slice(0, maxlength - 3) + "..." : s;
export default shorten;
