import React, { useState } from "react";
import { InputStyle } from "./style";

const InputForm = (props) =>{
     const [valueInput,setValueInput] = useState('x')
     const {placeholder ='Nhập text',...rests} = props
     return(
          <InputStyle placeholder={placeholder} valueInput={valueInput}{...rests}/>
     )
}
export default InputForm