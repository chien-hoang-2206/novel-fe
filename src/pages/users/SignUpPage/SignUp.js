import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Icon } from "@iconify/react";
import { Nomal } from "../../../components/TextField/TestComponents";
import axios from "../../../api/axios";
const SignUP_URL = "/api/accounts/signup";
function SignUp(props) {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm_pass, setconfirm_passs] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [warming, setWarming] = useState(false);
  useEffect(() => {
    if (pass !== '' && confirm_pass !== '') {
      if (pass !== confirm_pass) {
        // Hiển thị cảnh báo khi hai mật khẩu không giống nhau
        setPasswordMatch(false);
      }
      else {
        setPasswordMatch(true)
      }
    }
  }, [pass, confirm_pass]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userName, email, confirm_pass);
    axios
      .post(SignUP_URL, {
        name: userName,
        email: email,
        password: confirm_pass,
        avatarLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png",
        isAdmin: false
      })
      .then((response) => {
        // console.log(response.data)
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
          setWarming(true);
        }
      })
      .catch((error) => {
        // console.log(error.response.data.error);
        alert(error.response.data.error)
      });
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>

        <div className="flex my-2 items-center justify-center bg-transparent h-10 border-2">
          <Icon icon="ic:baseline-email" />
          <input
            className="inputSignUP"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            type="text"
            placeholder="UserName"
            id="username"
            name="username"
          />
        </div>

        <div className="flex my-2 items-center justify-center bg-transparent h-10 border-2">
          <Icon icon="ic:baseline-email" />
          <input
            className="inputSignUP"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
        </div>

        <div className="flex my-2 items-center justify-center bg-transparent h-10 border-2">

          <Icon icon="mdi:password" />
          <input
            className="inputSignUP"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>

        <div className="flex my-2 items-center justify-center bg-transparent h-10 border-2">

          <Icon icon="mdi:password" />
          <input
            className="inputSignUP"
            value={confirm_pass}
            onChange={(e) => setconfirm_passs(e.target.value)}
            type="password"
            placeholder="********"
            id="repassword"
            name="repassword"
          />
        </div>
        {!passwordMatch && (
          <span style={{ color: "red", padding: "0px 18%" }}> Nhập lại mật khẩu không đúng </span>
        )}
        {warming && (
          <span style={{ color: "red", padding: "0px 18%" }}> Email đã tồn tại </span>
        )}
        <button className="flex mx-auto  h-10 text-2xl uppercase  my-4 w-full  justify-center rounded-lg items-center bg-slate-300 hover:bg-orange-400" type="submit">
          Đăng ký
        </button>
      </form>

      <div className="link-orther-su">
        <div className="OR">
          <Nomal>OR</Nomal>
        </div>
        <div className="icon-link-su mx-auto">
          <div className="px-auto">
            <i class="fa-brands fa-facebook" style={{ color: "#075ced", marginLeft: "28px", fontSize: 40 }}></i>
            <i
              class="fa-brands fa-google-plus"
              style={{ color: "#ff0505", marginLeft: "30px", fontSize: 40 }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
