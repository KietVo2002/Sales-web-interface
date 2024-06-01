import React from "react"
import { Badge, Col } from 'antd'
import { WrapperHeader, WrapperTextHeader } from "./style"
import { SmileOutlined , HomeOutlined ,ShoppingCartOutlined} from '@ant-design/icons';
import ButtonInput from "../ButtonInput/ButtonInput";

const HeaderComponent = () => {
     return (
          <div style={{maxWidth:1510}}>

          <WrapperHeader gutter={16}>
              <Col span={3}>
                  <WrapperTextHeader>APPLE STORE</WrapperTextHeader>
              </Col>
              <Col span={12}>
                  <ButtonInput 
                  size = 'large'
                  textButton  = 'Tìm kiếm'
                  placeholder = 'input search text'
                  />
              </Col>
              <Col span={2} style={{display:'flex'}}>
                  <WrapperTextHeader>
                      <HomeOutlined/> Home
                  </WrapperTextHeader>
              </Col>
              <Col span={4}>
                  <WrapperTextHeader>
                      <SmileOutlined /> Login/Sign in
                  </WrapperTextHeader>
              </Col>
              <Col span={2} >
                  <WrapperTextHeader>
                    <Badge count={4} size="small">
                      <ShoppingCartOutlined style={{ fontSize: '30px' ,color:'#fff'}} />               
                    </Badge> 
                  </WrapperTextHeader>
              </Col>
          </WrapperHeader>
      </div>
     )
}
export default HeaderComponent
