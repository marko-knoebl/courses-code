type CountryRow = [string, string, string, number];
export type CountryData = Array<CountryRow>;

type Action = {
  type: string;
};

type AddCountryAction = Action & {
  type: "ADD_COUNTRY";
  data: {
    code: string;
    name: string;
    population: number;
    capital: string;
  };
};

type DeleteCountryAction = Action & {
  type: "DELETE_COUNTRY";
  row: number;
};

type ClearAllAction = Action & {
  type: "CLEAR_ALL";
};

type ChangeCountryAction = Action & {
  type: "CHANGE_COUNTRY";
  data: {
    code: string;
    name: string;
    population: number;
    capital: string;
  };
  row: number;
};

type CountryAction =
  | AddCountryAction
  | DeleteCountryAction
  | ClearAllAction
  | ChangeCountryAction;

function countryReducer(
  state: CountryData,
  action: CountryAction
): CountryData {
  switch (action.type) {
    case "ADD_COUNTRY":
      return [
        ...state,
        [
          action.data.name,
          action.data.code,
          action.data.capital,
          action.data.population
        ]
      ];
    case "DELETE_COUNTRY":
      return state.filter((country, index) => index !== action.row);
    case "CLEAR_ALL":
      return [];
    case "CHANGE_COUNTRY":
      return state.map((country, index) =>
        index === action.row
          ? [
              action.data.name,
              action.data.code,
              action.data.capital,
              action.data.population
            ]
          : country
      );

    default:
      return state;
  }
}

export default countryReducer;
