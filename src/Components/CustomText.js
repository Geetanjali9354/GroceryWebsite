import React from "react";
function CustomText({Text, className,fontWeight}) {
    return(
        <p style={{fontFamily:'Quicksand', fontWeight: fontWeight}} className={className}>{Text}</p>
    )
};
export default CustomText;