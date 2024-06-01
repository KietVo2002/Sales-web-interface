import React from "react";
import { ContainerLeft, ContainerRight, TextAlight } from "./style";
import { Image } from "antd";
import InputForm from "../inputForm/inputForm";
import ButtonComponents from "../ButtonComponents/ButtonComponents";
import logoLogin from "../../accset/images/logoLogin.png";

const SigninPage = () => {
  return (
    <div
      style={{
        background: "rgb(227, 227, 236)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "726px",
      }}
    > 
      <div
        style={{
          marginTop: "50px",
          width: "650px",
          height: "450px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <ContainerLeft>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "35px",
            }}
          >
            <h1>ĐĂNG NHẬP</h1>
            <InputForm  placeholder='abc@gmail.com'/>
            <InputForm style={{marginTop:"10px"}} placeholder="password"/>
            <ButtonComponents
              size={30}
              styleButton={{
                marginTop:'20px',
                background: "rgb(38 38 43)",
                height: "48px",
                width: "230px",
              }}
              textButton={"ĐĂNG NHẬP"}
              styleTextButton={{ color: "#fff", fontWeight: "bold" }}
            ></ButtonComponents>
            <p><TextAlight>Quên mật khẩu ?</TextAlight></p>
            <p>Chưa có tài khoản? <TextAlight>Tạo tài khoản</TextAlight> </p>
          </div>
        </ContainerLeft>
        <ContainerRight>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "50px",
              marginRight:'30px'
            }}
          >
            <Image src={logoLogin} preview={false} alt="image-login" height={350} width={300}/>
            <h4 style={{ color: "white" }}>Mua Sắm Tại Đây</h4>
          </div>
        </ContainerRight>
      </div>
    </div>
  );
};

export default SigninPage;
