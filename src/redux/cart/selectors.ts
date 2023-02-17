import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cart; //селектор
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
