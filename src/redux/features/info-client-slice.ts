import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let items = {};
if (
  typeof window !== "undefined" &&
  localStorage.getItem("clientCafeshm") !== null
) {
  items = JSON.parse(localStorage.getItem("clientCafeshm") || "");
}

type DefaultState = {
  phone: string;
  deliveryType: string;
  deliverySelfAddress: string;
  street: string;
  build: string;
  privateHome: string;
  apartment: string;
  podyezd: string;
  floor: string;
  comment: string;
  time: string;
  order_day: string;
  order_time: string;
  payType: string;
  order: string;
};

const initialState = items as DefaultState;

export const basket = createSlice({
  name: "client",
  initialState,
  reducers: {
    addToClient: (state, action: PayloadAction<any>) => {
      const infoClient = action.payload;
      //   const isExists = state.some((r) => r.id === idProduct.id);
      //   if (isExists) {
      //   } else {
      const tempObj = {
        phone: infoClient.phone,
        deliveryType: infoClient.deliveryType,
        deliverySelfAddress: infoClient.deliverySelfAddress,
        street: infoClient.street,
        build: infoClient.build,
        privateHome: infoClient.privateHome,
        apartment: infoClient.apartment,
        podyezd: infoClient.podyezd,
        floor: infoClient.floor,
        comment: infoClient.comment,
        time: infoClient.time,
        order_day: infoClient.order_day,
        order_time: infoClient.order_time,
        payType: infoClient.payType,
        order: infoClient.order,
      };

      state = tempObj;
      // }
      localStorage.setItem("clientCafeshm", JSON.stringify(state));
    },
  },
});

export const { addToClient } = basket.actions;
export default basket.reducer;
