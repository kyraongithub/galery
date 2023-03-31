const initialState = {
  galery: [],
  isLoading: true,
  keyword: "",
};

type Action = {
  type: string;
  value: any;
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_GALERY":
      return {
        ...state,
        galery: action.value,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.value,
      };
    case "SET_KEYWORD":
      return {
        ...state,
        keyword: action.value,
      };
  }
  return state;
};

export default reducer;
