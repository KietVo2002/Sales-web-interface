import styled from "styled-components";
import ButtonComponents from "../../components/ButtonComponents/ButtonComponents";

export const WrapperTypeProduct = styled.div`
display:flex;
align-item: center;
gap: 16px;
justify-content: flex-start;
border-bottom: 3px solid #161617;
height:20px;
`
export const WrapperButtonMore = styled(ButtonComponents)`
   &:hover{
     color:red;
     background-color: black;
     span{
          color:#fff;
     }
}
`
export const WrapperProducts = styled.div`
  margin: 10px 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`
