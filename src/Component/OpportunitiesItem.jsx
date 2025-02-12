import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@mui/material";
import { CiMenuKebab } from "react-icons/ci";

const OpportunitiesItem = () => {
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

export default OpportunitiesItem;
