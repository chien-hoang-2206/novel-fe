import React, { useState } from "react";
import "./NewNovel.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import LoginModal from "../LoginModal/LoginModal";
import axios from "../../../api/axios";
const PostNovel = "/api/novels/";

function NewNovel(props) {
  const accID = sessionStorage.getItem("accID") || "";
  if (!accID) {
    <LoginModal />
  }
  const [nameNovel, setNameNovel] = useState("");
  const [content, setContent] = useState("");
  const [types, setTypes] = useState([]);
  const [AuthName, setAuthName] = useState(sessionStorage.getItem("username"));
  const [valuetype, setValueType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleAddType = () => {
    const newType = document.getElementById("inputType").value; // lấy giá trị từ ô input
    setValueType("");
    setTypes([...types, newType]); // thêm giá trị mới vào mảng và cập nhật lại state
  };
  const handleInputChange = (e) => {
    setValueType(e.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    axios
      .post(PostNovel, {
        title: nameNovel,
        intro: content,
        types: types,
        author: AuthName,
        accountPostedId: accID,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          window.location.href = "/post-novel"; // Thay đổi đường dẫn tương ứng
          alert(
            "Đăng truyện thành công, hệ thống đang phê duyệt truyện của bạn"
          );
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
          alert("Đăng truyện không thành công");
        }
      })
      .catch((error) => {
        console.log(error);

        alert(error.response.data.error);
      });
    console.log(nameNovel);
    console.log(content);
    console.log(types);
    console.log(AuthName);
    console.log(accID);
  };

  const handleChange = (value) => {
    setContent(value);
  };


  return (
    <div className="box-post-novel">
      <div className="postnv">
        <h2> Đăng truyện </h2>
      </div>
      <div className="tems-of-use">
        <h6>
          {" "}
          Hãy đọc <a href="/"> Điều Khoản Đăng Truyện </a>&{" "}
          <a href="/"> Hướng Dẫn Đăng Truyện </a>để truyện của bạn được duyệt
          (công khai)
        </h6>
      </div>

      <div className="Input-row">
        <form onSubmit={handleSubmit}>
          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-book-journal-whills"></i>
              <h8>Tên Truyện</h8>
            </div>
            <div className="col-input">
              <input
                name="nameNovel"
                type="text"
                className="input-name-novel"
                onChange={(e) => setNameNovel(e.target.value)}
                id="nameNovel"
                placeholder={"Nhập tên truyện"}
              />
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-file"></i>
              <h8>Giới thiệu</h8>
            </div>
            <div className="col-input">
              <ReactQuill value={content} onChange={handleChange} />

              {/* {isTranslated === true ? (
                <input
                  type="button"
                  className="translater-btn"
                  name="OCR"
                  value="VN-EN"
                  style={{
                    backgground: "transparent",
                    paddingLeft: "5px",
                    width: "70px",
                  }}
                  onClick={handleTranslate}
                />
              ) : (
                <input
                  type="button"
                  className="translater-btn"
                  name="OCR"
                  value="EN-VN"
                  style={{
                    backgground: "transparent",
                    paddingLeft: "5px",
                    width: "70px",
                  }}
                  onClick={handleTranslate}
                />
              )}
              <input
                type="file"
                className="ocr-import"
                name="OCR"

                style={{
                  backgground: "transparent",
                  paddingLeft: "5px",
                  width: "150px",
                }}
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />

              <input
                type="button"
                className="translater-btn2"
                name="upload"
                style={{
                  backgground: "transparent",
                  marginLeft: "25px",
                  width: "100px",
                }}
                value="Upload"
                onClick={uploadFile}
              /> */}
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-file"></i>
              <h8>Thể Loại</h8>
            </div>

            <div className="col-input-btn">
              <input
                style={{ flex: "4" }}
                type="text"
                className="input-name-novel"
                value={valuetype}
                onChange={handleInputChange}
                name="inputType"
                id="inputType"
                placeholder={"Nhập tên thể loại"}
              />
              <button
                type="button"
                className="button-add-type"
                style={{ flex: 2 }}
                onClick={handleAddType}
              >
                Thêm
              </button>
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type"></div>

            <div className="col-input-btn">
              {types.map((type, index) => (
                <button key={index} >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "5px" }} className="row-sm">
            <div className="col-type"></div>

            <div className="col-input-btn">
              <div className="col-type">
                {" "}
                <a href="https://truyenhdx.com/guide/tags/">
                  {" "}
                  Một số thể loại{" "}
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-book-journal-whills"></i>
              <h8>Loại Truyện</h8>
            </div>
            <div className="col-input">
              <select
                id="option-select"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">-- Chọn loại --</option>
                <option value="Tự sáng tác">Tự sáng tác</option>
                <option value="Sưu tầm">Sưu tầm</option>
                <option value="Dịch">Dịch</option>
              </select>
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-book-journal-whills"></i>
              <h8>Tác Giả</h8>
            </div>
            <div className="col-input">
              {selectedOption === "Tự sáng tác" ? (
                <input
                  type="text"
                  value={AuthName}
                  name="AuthName"
                  id="AuthName"
                />
              ) : (
                <input
                  type="text"
                  name="AuthName"
                  onChange={(e) => setAuthName(e.target.value)}
                  id="AuthName"
                  placeholder={"Nhập tên tác giả"}
                />
              )}
            </div>
          </div>
          <div className="post-novel">
            <button type="submit" class="btn">
              Đăng Truyện
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewNovel;
