import React, {  useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./PostNovel.css";
import { Link, Outlet} from "react-router-dom";
import ChatBox from "../ChatBox/ChatBox";
function PostNovel(props) {
  const [showChatbox, setShowChatbox] = useState(false);
  const handleClick = () => {
    setShowChatbox(!showChatbox);
  };
  return (
    <div className="container-page">
      <div className="breadown">
        <Breadcrumb>
          <Breadcrumb.Item
            style={{ textDecoration: "none", fontWeight: "bold" }}
            href="/home"
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            style={{ textDecoration: "none", fontWeight: "bold" }}
            href="/novel/{props.novelid}"
          >
            Đăng truyện
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
     
      <div className="row-container">
      <div className="icon-chatbox">
        <button className={`btn-chatbox ${showChatbox ? "show" : ""}`}  onClick={handleClick}>
        <i class="fa-brands fa-facebook-messenger" style= {{ color: "#5c89d6" }}></i>
        </button>
        {showChatbox && <ChatBox />}
      </div>
        <div className="col-sm-1">
          <div className="avatar-area">
            <div className="frame-avt">
              <img alt='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png" />
            </div>
            <div className="name-auth">
              <h6> Chien Hoang </h6>
            </div>
          </div>

          <div className="nav-col">
            <div className="option-nav">
              <Link to={"/post-novel/profile"}>
                <i class="fa-solid fa-address-card"></i>
                Thông tin{" "}
              </Link>
            </div>
            <div className="option-nav">
              <Link to={"/post-novel/post-new-novel"}>
                <i class="fa-sharp fa-solid fa-cloud-arrow-up"></i>
                Đăng truyện mới
              </Link>
            </div>
            <div className="option-nav">
              <Link to={"/post-novel/mynovel"}>
                <i class="fa-sharp fa-solid fa-cloud-arrow-up"></i>
                Tủ truyện
              </Link>
            </div>
            <div className="option-nav">
              <Link to={"/post-novel/message"}>
                <i class="fa-solid fa-envelope"></i>
                Tin nhắn
              </Link>
            </div>
          
           
          </div>
        </div>

        <div className="col-sm-2">
          <div className="frame-avt2">
            <Outlet />
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default PostNovel;
