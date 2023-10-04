import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Login from "../loginPage";
import SignUp from "../SignUpPage/SignUp";

function LoginModal({ onClose }) {
  return (
    <div className="h-screen  w-full fixed left-1 top-12 z-30" style={{ background: "rgba(187, 202, 219, 0.44)" }}  >
      <div className="bg-white  left-1/3 top-20 h-3/4 w-2/6 px-3 rounded-md  fixed z-40 opacity-100 ">
        <span className=" flex justify-end text-2xl hover:text-red-600 cursor-pointer " onClick={onClose}>&times;</span>
        <Tabs
          defaultActiveKey="login"
          id="uncontrolled-tab-example"
          className="mb-6"
          fill
          style={{ height: "5vh", border: "none" }}
        >
          <Tab className="" eventKey="login" title="Đăng nhập">
            <Login />
          </Tab>
          <Tab eventKey="signup" title="Đăng ký">
            <SignUp />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default LoginModal;
