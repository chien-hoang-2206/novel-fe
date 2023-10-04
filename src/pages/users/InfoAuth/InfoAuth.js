import React from "react";
import "./InfoAuth.css";
function InfoAuth() {
  return (
    <div className="info-container">
      <div className="banner-box">
        <img className="img-banner" alt="img" src="/Banner _DDD.png" />
      </div>

      <div className="avater-box">
        <img className="img-avatar" alt="img" src="/avatar.png" />
      </div>

      <div className="content-box-2">
        <h3 className="title-box-2">Câu chuyện cá nhân</h3>
        <textarea  className="input-box-2"/>
        <button className="button-box-2">Cập Nhật</button>
      </div>

      <div className="content-box-1">
        <div style={{display:"flex"}}>
          <div className="info-col1">
            <p className="info-col1">Ngoại hiệu:</p>
            <p>Email:</p>
            <p>ID thành viên:</p>
            <p>Chức vụ:</p>
          </div>
          <div className="info-col2">
            <p> hiệu</p>
            <p>mail</p>
            <p>ID viên</p>
            <p>Chức vụ</p>
          </div>
        </div>

        <div style={{display:"flex", marginLeft:"90px"}}>
          <div className="info-col1">
            <p className="info-col1">Số người theo dõi:</p>
            <p>Số like</p>
            <p>Vàng:</p>
            <p>Cấp:</p>
          </div>
          <div className="info-col2">
            <p> hiệu</p>
            <p>mail</p>
            <p>ID viên</p>
            <p>Chức vụ</p>
          </div>
        </div>
        
      </div>

   
    </div>
  );
}

export default InfoAuth;
