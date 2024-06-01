import React, { Fragment } from "react";
import NarbarComponent from "../../components/NarbarComponent/NarbarComponent";
import CartComponent from "../../components/CartComponent/CartComponent";
import { Pagination,Row ,Col} from "antd";

import { WrapperProducts, Wrappernavbar } from "./style";
const TypeProductPage = () => {
     return (
          <Fragment style={{padding: '20px 120px'}}>
          <Row style={{ padding: '20px 120px', flexWrap: 'nowrap'}}>
               <Wrappernavbar>
                    <NarbarComponent />
               </Wrappernavbar>
               <Col span={20}>
               <WrapperProducts>
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
               </WrapperProducts>
               <Pagination defaultCurrent={1} total={50} style={{textAlign:"center"}} />
               </Col>
          </Row>
          
          </Fragment>

     )
}
export default TypeProductPage 