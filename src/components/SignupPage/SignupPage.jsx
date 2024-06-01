import React from "react";
import { ContainerLeft, ContainerRight, TextAlight } from "./style";
import { RoundedImage } from "./style";
import InputForm from "../inputForm/inputForm";
import ButtonComponents from "../ButtonComponents/ButtonComponents";
import logoLogin from "../../accset/images/logoLogin.png";

const SignupPage = () =>{
     return(
          <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(105 102 102 / 50%)",
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
                <h2>Đăng Ký Tài Khoản</h2>
                <p>Đăng Ký tài khoản bằng Email</p>
                <InputForm  placeholder='abc@gmail.com'/>
                <InputForm style={{marginTop:"10px"}} placeholder="password"/>
                <InputForm style={{marginTop:"10px"}} placeholder="comfim-password"/>
                <ButtonComponents
                  size={30}
                  styleButton={{
                    marginTop:'20px',
                    background: "rgb(38 38 43)",
                    height: "48px",
                    width: "230px",
                  }}
                  textButton={"TẠO TÀI KHOẢN"}
                  styleTextButton={{ color: "#fff", fontWeight: "bold" }}
                ></ButtonComponents>
              </div>
            </ContainerLeft>
            <ContainerRight>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "70px",
                  marginRight:"25px",
                }}
              >
                <RoundedImage src={logoLogin} preview={false} alt="image-login" height={350} width={300}/>
                <h4 style={{ color: "white" }}>Mua Sắm Tại Đây</h4>
              </div>
            </ContainerRight>
          </div>
        </div>
     )
}
export default SignupPage