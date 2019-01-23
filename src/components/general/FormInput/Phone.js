import React from "react";
import InputMask from "react-input-mask";

export const Phone = (props) => {
    return <InputMask {...props} mask="+99(999)-(99)-(99)-(999)" maskChar=" "/>;
};
