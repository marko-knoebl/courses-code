const myLogger = store => next => action => {
  console.log(action);
  next(action);
};

export default myLogger;
