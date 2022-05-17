/**
 * shortens a given string to a specified length,
 * adding "..." at the end if it was shortened
 */
function shorten(text: string, maxlength: number): string {
  if (text.length > maxlength) {
    return text.slice(0, maxlength - 3) + "...";
  }
  return text;
}
export default shorten;
