import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../accset/images/test.png";
import imageSmall from "../../accset/images/test.png"
import { PriceProduct, PriceTextProduct, QualityProduct, StyleColImage, StyleImageSmall, StyleNameProduct, WapperInputNumber } from "./style";
import { StarOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ButtonComponents from "../ButtonComponents/ButtonComponents";


const ProductDetailCompoment = () => {
     const onChange = () => { };
     return (
          <Row style={{ paddingLeft: 50, justifyContent: 'space-between' }}>
               <Col span={10}>
                    <Image src={imageProduct} alt='image product' preview='false' />
                    <Row style={{ justifyContent: 'space-between' }}>
                         <StyleColImage span={4} >
                              <StyleImageSmall src={imageSmall} alt='image small' preview='false' />
                         </StyleColImage>
                         <StyleColImage span={4} >
                              <StyleImageSmall src={imageSmall} alt='image small' preview='false' />
                         </StyleColImage>
                         <StyleColImage span={4} >
                              <StyleImageSmall src={imageSmall} alt='image small' preview='false' />
                         </StyleColImage>
                         <StyleColImage span={4} >
                              <StyleImageSmall src={imageSmall} alt='image small' preview='false' />
                         </StyleColImage>
                         <StyleColImage span={4} >
                              <StyleImageSmall src={imageSmall} alt='image small' preview='false' />
                         </StyleColImage>
                    </Row>
               </Col>
               <Col span={14} style={{ paddingTop: 150, paddingLeft: 50 }}>
                    <StyleNameProduct>Máy tính xách tay Apple Macbook Air (2022) M2 chip, 13.6 inches, 8GB, 256GB SSD</StyleNameProduct>
                    <div>
                         <StarOutlined style={{ fontSize: '25px', color: 'rgb(253,216,54)' }} />
                         <StarOutlined style={{ fontSize: '25px', color: 'rgb(253,216,54)' }} />
                         <StarOutlined style={{ fontSize: '25px', color: 'rgb(253,216,54)' }} />
                         <StarOutlined style={{ fontSize: '25px', color: 'rgb(253,216,54)' }} />
                         <StarOutlined style={{ fontSize: '25px', color: 'rgb(253,216,54)' }} />
                    </div>
                    <PriceProduct>
                         <PriceTextProduct>50.000.000 VND</PriceTextProduct>
                    </PriceProduct>
                    <div>
                         <div>
                         <h2>Số Lượng</h2>
                         </div>                 
                         <QualityProduct>
                                   <button style={{ border: 'none', background: 'transparent' }}>
                                        <PlusOutlined style={{ color: '#000', fontSize: '15px' }} />
                                   </button>
                                   <WapperInputNumber min={1} max={10} defaultValue={3} onChange={onChange} size="small" />
                                   <button style={{border: 'none', background: 'transparent' }}>
                                        <MinusOutlined style={{ color: '#000', fontSize: '15px' }} />
                                   </button>
                         </QualityProduct>                         
                    </div>
                    <div style={{ paddingTop: 20 }}>
                         <ButtonComponents
                              size={30}
                              styleButton={{
                                   background: 'rgb(38 38 43)',
                                   height: '48px',
                                   width: '200px',
                              }}
                              textButton={'MUA NGAY'}
                              styleTextButton={{ color: '#fff', fontWeight: 'bold', }}
                         ></ButtonComponents>

                         <ButtonComponents 
                              size={30}
                              styleButton={{
                                   height: '48px',
                                   width: '200px',
                                   margin: '0 20px',
                              }}
                              textButton={'MUA TRẢ SAU'}
                              styleTextButton={{color: 'rgb(38 38 43)', fontWeight: 'bold' }}
                         ></ButtonComponents>
                    </div>
               </Col>
          </Row>
     )
}
export default ProductDetailCompoment