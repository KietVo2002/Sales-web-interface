import React from 'react';
import { Card } from 'antd';
import { StyleNameProduct } from './style';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { ReportText } from './style';

const CartComponent = () => {
  const fullStars = 4;
  const emptyStars = 5 - fullStars;
  return (
    <>
      <div>
        <Card
          hoverable
          style={{ width: 240, boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",marginTop:20 }}
          cover={<img alt="example" src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/6/638216322096898543_macbook-air-m2-2023-15-inch-xanh-1.jpg" />}
        >
          <StyleNameProduct> MacBook Air Pro <br></br>
            <span style={{ color: 'red' }}>29.790.000 VNĐ</span>
          </StyleNameProduct>
          <ReportText>
            {[...Array(fullStars)].map((_, index) => (
              <StarFilled key={index} style={{ color: 'gold' }} />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
              <StarOutlined key={index} style={{ color: 'gold' }} />
            ))}
          </ReportText>
        </Card>
      </div>
     
    </>
  );
}

export default CartComponent;
