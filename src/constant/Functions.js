// ======================================================================
// reducer
export const FnReducer = (state, action) => {
  switch (action.type) {
    case "acconut":
      return {
        ...state,
        acconut: !state.acconut,
      };

    case "History":
      return {
        ...state,
        History: !state.History,
      };

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

    case "save":
      return {
        ...state,
        save: !state.save,
      };
    case "Conection":
      return {
        ...state,
        Conection: !state.Conection,
      };
    case "Account":
      return {
        ...state,
        Account: !state.Account,
      };

    case "SinUp":
      return {
        ...state,
        SinUp: !state.SinUp,
      };

    case "Vrify":
      return {
        ...state,
        Vrify: !state.Vrify,
      };

    case "Login":
      return {
        ...state,
        Login: !state.Login,
      };

    case "ChengPass":
      return {
        ...state,
        ChengPass: !state.ChengPass,
      };
    case "Place":
      return {
        ...state,
        Place: !state.Place,
      };

    case "Show":
      return {
        ...state,
        Show: !state.Show,
      };
    case "Info":
      return {
        ...state,
        Info: !state.Info,
      };
    case "Chose":
      return {
        ...state,
        Chose: !state.Chose,
      };

    case "NewAccount":
      return {
        ...state,
        NewAccount: !state.NewAccount,
      };
    case "Derawer":
      return {
        ...state,
        Derawer: !state.Derawer,
      };
    case "InPerson":
      return {
        ...state,
        InPerson: !state.InPerson,
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
  save: false,
  Conection: false,
  Account: true,
  AcconutHave: false,
  SinUp: false,
  Login: false,
  Vrify: false,
  ChengPass: false,
  NewAccount: false,
  Place: false,
  Show: false,
  History: false,
  Derawer: true, //====
  Info: false,
  Chose: false,
  InPerson: false,
};


export const sp = (number) => {
  const seperatedNumber = number?.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber?.join(",");
  return joinedNumber;
};