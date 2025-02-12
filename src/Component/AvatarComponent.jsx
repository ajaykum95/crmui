import React from "react";
import { Avatar } from "@mui/material";

const AvatarComponent = ({ name }) => {
    const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "");

    return <Avatar>{getInitial(name)}</Avatar>;
};

export default AvatarComponent;
