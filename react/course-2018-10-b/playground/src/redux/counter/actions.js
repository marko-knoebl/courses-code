// action creators

import { DECREMENT, INCREMENT } from './constants';

const decrement = () => ({ type: DECREMENT });
const increment = () => ({ type: INCREMENT });

export { decrement, increment };
