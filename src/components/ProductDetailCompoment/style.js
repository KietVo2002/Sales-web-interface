import { Col, Image ,InputNumber} from "antd";
import styled from "styled-components";

export const StyleImageSmall = styled(Image)`
     height: 100px;
     width: 100px;
`
export const StyleColImage = styled(Col)`
     flex-basics: unet;
     display: flex;
`
export const StyleNameProduct = styled.h1`
display: -webkit-box;
text-overflow: ellipsis;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
font-weight: 500;
margin: 0;
vertical-align: sub;
max-height: 3rem;
line-height: 1.5rem;
overflow: hidden;
max-width: 41.5625rem;
font-size: 1.25rem;
overflow-wrap: break-word;
`
export const PriceProduct = styled.div`
backgroundcolor: red;
border-radius:4px;
`
export const PriceTextProduct = styled.h1`
font-size:32px;
line-height:40px;
font-weight:500;
`
export const QualityProduct = styled.div`
display:flex;
gap:4px;
align-items: center,
border-radius: 10px;
width:100px;
border: 2px solid #000;
`
export const WapperInputNumber = styled(InputNumber)`
     &.ant-input-number.ant-input-number-sm{
          width:60px;
          border-top:none;
          border-bottom:none;
          &.ant-input-number-handler-wrap {
               display:none;
          }
     }
width:50px
`