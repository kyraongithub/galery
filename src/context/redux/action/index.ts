import { store } from "../store";

export const handleGalery = (value: any) => {
  store.dispatch({
    type: "SET_GALERY",
    value,
  });
};

export const handleLoading = (value: boolean) => {
  store.dispatch({
    type: "SET_LOADING",
    value,
  });
};
export const handleKeyword = (value: string) => {
  store.dispatch({
    type: "SET_LOADING",
    value: true,
  });
  store.dispatch({
    type: "SET_KEYWORD",
    value,
  });
};
