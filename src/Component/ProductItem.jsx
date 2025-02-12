// import React from "react";
// import { CiMenuKebab } from "react-icons/ci";

// const ProductItem = () => {
//   const product = [
//     {
//       id: 1,
//       logo: "RS",
//       type: "BIS Registration",
//       certificate: "Business certificate",
//     },
//     {
//       id: 2,
//       logo: "TH",
//       type: "FSSAI",
//       certificate: "Business certification",
//     },
//     {
//       id: 3,
//       logo: "AK",
//       type: "CDSCO",
//       certificate: "Business certification",
//     },
//   ];

//   return (
//     <>
//     <div className="container" style={{ marginLeft:"-10px",width:"320px", marginLeft:"220px" }}>
//       <ul className="list-group ">
//         {product.map((item) => (
//             <li
//             key={item.id}
//             className="list-group-item d-flex align-items-center justify-content-between"
//           >
//             <div className="d-flex align-items-center">
//               <div
//                 className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   fontWeight: "bold",
//                   fontSize: "16px",
//                   // marginRight: "10px",
//                 }}
//               >
//                 {item.logo}
//               </div>
//               <div>
//                 <h6 className="mb-0">{item.type}</h6>
//                 <small className="text-muted">{item.certificate}</small>
//               </div>
//             </div>
//             <div >
//             <CiMenuKebab />

//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//                   </>
//   );
// };

// export default ProductItem;
import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@mui/material";
import { CiMenuKebab } from "react-icons/ci";

const ProductItem = () => {
  const products = [
    {
      id: 1,
      logo: "RS",
      type: "BIS Registration",
      certificate: "Business certificate",
    },
    {
      id: 2,
      logo: "TH",
      type: "FSSAI",
      certificate: "Business certification",
    },
    {
      id: 3,
      logo: "AK",
      type: "CDSCO",
      certificate: "Business certification",
    },
  ];

  return (
    <List sx={{ maxHeight: '400px', overflowY: 'auto' }}>
      {products.map((product) => (
        <ListItem key={product.id}>
          <ListItemAvatar>
            <Avatar sx={{  height: "35px", width: "35px", fontSize: "14px" ,
                                marginTop:"-10px"

            }}>
              {product.logo}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={product.type}
            secondary={product.certificate}
            primaryTypographyProps={{
              sx: { fontSize: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  marginTop:"-10px"
               }, // Font size for primary text
            }}
            secondaryTypographyProps={{
              sx: { fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, // Font size for secondary text
            }}
            

          />
          <IconButton>
            <CiMenuKebab />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductItem;
