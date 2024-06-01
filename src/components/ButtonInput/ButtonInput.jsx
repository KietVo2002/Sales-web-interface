import { Button,Input } from "antd";
import React from "react";
import { SearchOutlined } from '@ant-design/icons';

const ButtonInput = (props) => {
     const {size,placeholder,textButton,bordered, backgroundColorInput = '#fff', backgroundColorButton = '#fff',colorButton = '#fff'} = props
     return(
          <div style={{display: 'flex', backgroundColor:'#fff',border:'20px'}}>
               <Input 
               size={size}
               placeholder={placeholder} 
               bordered = {false} 
               style={{backgroundColor:backgroundColorInput,}}
               />
               <Button 
               size={size} 
               style={{background:backgroundColorButton,colorButton, border :!bordered && 'none'}}
               icon={<SearchOutlined style={{color:colorButton}}/>}>
                    <span>{textButton}</span>
               </Button>

          </div>
     )
}
export default ButtonInput