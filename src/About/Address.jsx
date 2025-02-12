// import React, { useState } from "react";
// import AddressPopup from "./AddressPopup";
// import About from "./About";
// import Description from "./Description";

// const Address = () => {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   const handleSave = (data) => {
//     console.log("Saved Address Data:", data);
//   };

//   const handleClose = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <>
//       <button
//         onClick={() => setPopupOpen(true)}
//         style={{ marginLeft: "250px", paddingTop: "150px" }}
//       >
//         Open Address Popup
//       </button>
//       <AddressPopup
//         open={isPopupOpen}
//         onClose={handleClose}
//         onSave={handleSave}
//       />

//       <About/>
//       <Description/>
//     </>
//   );
// };

// export default Address;
