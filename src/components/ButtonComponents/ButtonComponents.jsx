import { Button } from "antd";
import React from "react";
const ButtonComponents =({size,textButton,styleButton,styleTextButton, ...rest})=>{
     return(
          <Button 
          size={size}
          style={styleButton}
          >
               <span style={styleTextButton}> {textButton}</span>
          </Button>
     )
}
export default ButtonComponents