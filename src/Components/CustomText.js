import React from "react";
function CustomText({Text, className,fontWeight,fontSize}) {
    return(
        <p style={{fontFamily:'Quicksand', fontWeight: fontWeight, fontSize: fontSize}} className={className}>{Text}</p>
    )
};
export default CustomText;