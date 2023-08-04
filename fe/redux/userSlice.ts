import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const min = 100000;
const max = 1000000;

type UserState = {
  value: number;
};

// 6자리 랜덤 값 생성
const initialState = {
  value: 0,
} as UserState;

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.value = 0;
    },
    generate: (state) => {
      state.value = Math.floor(Math.random() * (max - min) + min);
    },
  },
});

export const {
  generate,
  reset,
} = user.actions;
export default user.reducer;