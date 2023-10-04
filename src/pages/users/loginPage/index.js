import { useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";

import axios from "../../../api/axios";
import { Link } from "react-router-dom";
const LOGIN_URL = "/api/accounts/login";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(LOGIN_URL, {
        email: email,
        password: pwd,
      })
      .then((response) => {
        if (response.data.user) {
          // Đăng nhập thành công, chuyển hướng đến trang chủ và lưu iduser vào cookies hoặc session
          document.cookie = `userID=${response.data.user._id}`;
          document.cookie = `avatar=${response.data.user.avatarLink}`;
          sessionStorage.setItem('username', response.data.user.name);
          sessionStorage.setItem('accID', response.data.user._id);
          sessionStorage.setItem('avatar', response.data.user.avatarLink);
          window.location.href = '/home'; // Thay đổi đường dẫn tương ứng
          // ReloadNavBar;
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
          alert('Đăng nhập không thành công');
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <>
      <form className="px-auto pt-16  " onSubmit={handleSubmit}>
        <div className="flex items-center justify-center h-12 ">
          <Icon className="relative left-7" icon="ic:baseline-email" />
          <input
            className="w-full px-5  mr-2  h-12 rounded-md bg-slate-100  "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <div className="flex  items-center justify-center h-12 my-4">
          <Icon className="relative left-7" icon="mdi:password" />
          <input
            className="w-full px-5 mr-2 h-12 rounded-md bg-slate-100  "
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>
        <button className="flex mx-auto  h-12 text-2xl uppercase  mt-9 w-11/12  justify-center rounded-lg items-center bg-slate-300 hover:bg-orange-400  " type="submit">
          Login
        </button>
      </form>
      
      <Link  className="flex justify-end my-3 bg-transparent" to="forgot-pass"> Quên mật khẩu ? </Link>
      <div className="mx-auto  my-8">
        <div className="flex justify-center my-2 items-center text-2xl">
          <i class="fa-brands fa-facebook" style={{ color: "#075ced" , fontSize: 40}}></i>
          <i
            class="fa-brands fa-google-plus"
            style={{ color: "#ff0505", marginLeft: "5vh"  , fontSize: 40 }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Login;
