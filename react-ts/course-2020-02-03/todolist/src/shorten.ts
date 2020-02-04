const shorten = (text: string, maxlength: number) => {
  return text.slice(0, maxlength - 3) + "...";
};

export default shorten;
