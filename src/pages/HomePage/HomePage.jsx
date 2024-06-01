import React from "react"
import TypeProducts from "../../components/TypeProduct/TypeProduct"
import { WrapperProducts, WrapperTypeProduct } from "./style"
import SliderComponents from "../../components/SliderComponents/SliderComponents"
import slider1 from '../../accset/images/slider1.jpg'
import slider2 from '../../accset/images/slider2.jpg'
import slider3 from '../../accset/images/slider3.jpg'
import CartComponent from "../../components/CartComponent/CartComponent"
import { WrapperButtonMore } from "./style"

const HomePage = () => {
     const arr = ['Sản Phẩm', 'Sản Phẩm', 'Sản Phẩm', 'Sản Phẩm', 'Sản Phẩm']
     return (
          <>
               <div style={{ margin: '20px 120px' }}>
                    <WrapperTypeProduct>
                         {arr.map((item) => {
                              return (
                                   <TypeProducts name={item} key={item} />
                              )
                         })}
                    </WrapperTypeProduct>
               </div>
               <div id='container' style={{ backgroundColor: "#e3e3ec", padding: '20px 120px' }}>
                    <SliderComponents arrImages={[slider1, slider2, slider3]} />
               </div>
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
                    <CartComponent />
                    <WrapperButtonMore textButton='Xem Thêm' type='outline' styleButton={{ boder: '1px, solid , red' }} />
               </WrapperProducts>
          </>
     )
}
export default HomePage
