// import { configureStore } from "@reduxjs/toolkit";
// import toggleSlice from "./ToggleSlice";


// const store=configureStore({
//     reducer:{
//         toggle:toggleSlice
//     },
// })
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import visibilitySlice from "./VisibilitySlice";

const store = configureStore({
  reducer: {
    visibility: visibilitySlice, // Corrected key
  },
});

export default store;
