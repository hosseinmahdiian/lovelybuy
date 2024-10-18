// ======================================================================
// reducer
export const FnReducer = (state, action) => {
  switch (action.type) {
    case "basket":
      return {
        ...state,
        basket: !state.basket,
      };

    case "pay":
      return {
        ...state,
        pay: !state.pay,
      };

    case "successful":
      return {
        ...state,
        successful: !state.successful,
      };

    case "Conection":
      return {
        ...state,
        Conection: !state.Conection,
      };

    case "Derawer":
      return {
        ...state,
        Derawer: !state.Derawer,
      };
    case "reRender":
      return {
        ...state,
        reRender: state.reRender + 1,
      };
    case "account":
      return {
        ...state,
        account: action.payLoad,
      };
    case "history":
      return {
        ...state,
        history: action.payLoad,
      };

    default:
      break;
  }
};
export const init = {
  acconut: false,
  basket: false,
  pay: false,
  successful: false,
  Conection: false,
  reRender: 0,
  account: false,
  history: false,
};

export const sp = (number) => {
  const seperatedNumber = number
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return seperatedNumber;
};

export const ChengHandler = (e, set) => {
  set((data) => ({
    ...data,
    [e.target.name]: e.target.value,
  }));
};

export const percent = (old, sell) => {
  return Math.round(((old - sell) / old) * 100);
};
