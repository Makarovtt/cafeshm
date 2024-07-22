import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let items = [];
if (
  typeof window !== "undefined" &&
  localStorage.getItem("basketCafeshm") !== null
) {
  items = JSON.parse(localStorage.getItem("basketCafeshm") || "");
}

type CountryState = [
  {
    id: number;
    image: string;
    title: string;
    quantity: number;
    price: number;
    description: string;
  },
];

const initialState = items as CountryState;

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {
      const idProduct = action.payload;
      const isExists = state.some((r) => r.id === idProduct.id);
      if (isExists) {
      } else {
        const quant_default =
          idProduct.portion + idProduct.unit === "100гр" ? 2 : 1;
        const tempObj = {
          id: idProduct.id,
          quantity: quant_default,
          image: idProduct.picture,
          price: idProduct.price,
          title: idProduct.title,
          description: idProduct.portion + idProduct.unit,
        };
        state.push(tempObj);
      }
      localStorage.setItem("basketCafeshm", JSON.stringify(state));
    },
    removeToBasket: (state, action: PayloadAction<number>) => {
      const idProduct = action.payload;
      const isExists = state.some((r) => r.id === idProduct);
      if (isExists) {
        const index = state.findIndex((r) => r.id === idProduct);
        if (index !== -1) {
          state.splice(index, 1);
        }
      }
      localStorage.setItem("basketCafeshm", JSON.stringify(state));
    },
    clearBasket: (state) => {
      state.splice(0, state.length);
      localStorage.setItem("basketCafeshm", JSON.stringify(state));
    },
    addCountProductToBasket: (state, action: PayloadAction<number>) => {
      const idApparat = action.payload;
      const index = state.findIndex((i) => i.id === idApparat);
      const quant = state[index].quantity;
      state[index].quantity = quant + 1;
      localStorage.setItem("basketCafeshm", JSON.stringify(state));
    },
    removeCountProductToBasket: (state, action: PayloadAction<number>) => {
      const idApparat = action.payload;
      const index = state.findIndex((i) => i.id === idApparat);
      const quant = state[index].quantity;
      if (quant === 1) {
        state.splice(index, 1);
      } else {
        state[index].quantity = quant - 1;
      }

      localStorage.setItem("basketCafeshm", JSON.stringify(state));
    },
  },
});

export const {
  addToBasket,
  removeToBasket,
  clearBasket,
  addCountProductToBasket,
  removeCountProductToBasket,
} = basket.actions;
export default basket.reducer;
