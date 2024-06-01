import React from "react";
import { Content, LabelText, TextValue } from "./style";
import { Checkbox } from "antd";

const NarbarComponent = () => {
     const onChange = () => { }
     const renderContent = (type, options) => {
          switch (type) {
               case 'text':
                    return options.map((option) => {
                         return <TextValue>{option}</TextValue>
                    })
               case 'checkbox':
                    return (
                         <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column',gap:'12px' }} onChange={onChange}>
                              {options.map((option) => {
                                   return (
                                        <Checkbox value={option.value}>{option.lable}</Checkbox>
                                   )
                              })}
                         </Checkbox.Group>
                    )
               default:
                    return {}
          }
     }
     return (
          <div>
               <LabelText>Label</LabelText>
               <Content>
                    {renderContent('text', ['Macbooks', 'Air Pods', 'Iphones', 'Màn Hình'])}
                    {renderContent('checkbox', [
                         { value: 'a', lable: 'A' },
                         { value: 'b', lable: 'B' },
                         { value: 'c', lable: 'C' },
                         { value: 'd', lable: 'D' },]
                    )}
               </Content>

          </div>
     )
}
export default NarbarComponent