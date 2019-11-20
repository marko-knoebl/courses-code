import countryReducer, { CountryData } from "./countryReducer";

const state1: CountryData = [["de", "Germany", "Berlin", 80000000]];
console.log(state1);
const state2 = countryReducer(state1, {
  type: "ADD_COUNTRY",
  data: { code: "AT", name: "Austria", population: 8000000, capital: "Vienna" }
});
console.log(state2);
const state3 = countryReducer(state2, {
  type: "DELETE_COUNTRY",
  row: 1
});
console.log(state3);
const state4 = countryReducer(state3, {
  type: "CHANGE_COUNTRY",
  row: 0,
  data: { code: "DE", name: "Germany", population: 90000000, capital: "Berlin" }
});
console.log(state4);
