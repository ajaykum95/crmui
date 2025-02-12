// VisibilitySlice.js
import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    showNotes: false,
    showEmail: false,
    showSms: false,
    showCall: false,
  },
  reducers: {
    toggleNotes: (state) => {
      state.showNotes = !state.showNotes;  // Toggle state.showNotes correctly
    },
    toggleEmail: (state) => {
      state.showEmail = !state.showEmail;
    },
    toggleSms: (state) => {
      state.showSms = !state.showSms;
    },
    toggleCall: (state) => {
      state.showCall = !state.showCall;
    },
  },
});

export const { toggleNotes, toggleEmail, toggleSms, toggleCall } = visibilitySlice.actions;
export default visibilitySlice.reducer;
