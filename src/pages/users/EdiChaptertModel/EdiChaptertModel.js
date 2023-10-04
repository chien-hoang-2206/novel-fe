import React from "react";
import { useState } from "react";
import "./EdiChaptertModel.css";
import ReactQuill from "react-quill";
import { useLocation, useParams } from "react-router-dom";
import axios from "../../../api/axios";
const AddChapter_Url = "/api/chapters/";
function EdiChaptertModel() {
  const { id } = useParams();
  const { state } = useLocation();
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const novelID = urlParts[urlParts.length - 3];
  console.log("novel");
  console.log(novelID);
  let chapterInfo;
  if (state && state.chapter) {
    chapterInfo = state.chapter;
  } else {
    chapterInfo = "no";
  }
  console.log(id);
  console.log(chapterInfo);
  const [nameChap, setNameChapter] = useState("");
  const [content, setContent] = useState('');

  // const handleTranslate = () => {
  //   if (isTranslated) {
  //     const url = "https://api.openai.com/v1/completions";
  //     const API_KEY = "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"; //
  //     const value = "Translate this into China '" + contentTranslate + "'";

  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${API_KEY}`,
  //     };

  //     const data = {
  //       model: "text-davinci-003",
  //       prompt: value,
  //       max_tokens: 700,
  //       temperature: 0,
  //     };

  //     axios
  //       .post(url, data, { headers: headers })
  //       .then((response) => {
  //         setContent(response.data.choices[0].text);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     setisTranslated(!isTranslated);
  //   } else {
  //     const url = "https://api.openai.com/v1/completions";
  //     const API_KEY = "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"; //
  //     const value = "Dịch sang tiếng Việt  '" + contentTranslate + "'";

  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${API_KEY}`,
  //     };

  //     const data = {
  //       model: "text-davinci-003",
  //       prompt: value,
  //       max_tokens: 700,
  //       temperature: 0,
  //     };

  //     axios
  //       .post(url, data, { headers: headers })
  //       .then((response) => {
  //         setContent(response.data.choices[0].text);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     setisTranslated(!isTranslated);
  //     // setContent(contentTranslate);
  //   }
  // };

  const handleChange = (value) => {
    setContent(value);
  };
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    // axios
    //   .post(PostNovel, {
    //     title: nameNovel,
    //     intro: content,
    //     types: types,
    //     author: AuthName,
    //     accountPostedId: accID,
    //   })
    //   .then((response) => {
    //     console.log(response.data)
    //     if (response.data) {
    //       window.location.href = "/post-novel"; // Thay đổi đường dẫn tương ứng
    //       alert("Đăng truyện thành công, hệ thống đang phê duyệt truyện của bạn");

    //     } else {
    //       // Đăng nhập thất bại, hiển thị thông báo lỗi
    //       alert("Đăng truyện không thành công");
    //     }
    //   })
    //   .catch((error) => {
    //     alert(error.response.data.error);
    //   });
  };

  const handleSubmitAddChapter = async (e) => {
    e.preventDefault();
    console.log(nameChap, content, novelID);
    axios
      .post(AddChapter_Url, {
        title: nameChap,
        content: content,
        novelId: novelID,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          alert("Đăng chương thành công");
          // window.location.href = `/post-novel/mynovel/${novelID}`; // Thay đổi đường dẫn tương ứng
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
          alert("Đăng chương không thành công");
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <div>
      <h4>Chỉnh sửa chương</h4>
      <div className="box-edit-chapter">
        {chapterInfo !== "no" ? (
          <form onSubmit={handleSubmitUpdate}>
            <div className="row-sm">
              <div className="col-type">
                <i class="fa-solid fa-book-journal-whills"></i>
                <h8>Tên chương</h8>
              </div>
              <div className="col-input">
                <input
                  name="nameChap"
                  onChange={(e) => setNameChapter(e.target.value)}
                  id="nameChap"
                  placeholder={chapterInfo.title}
                />
                <div></div>
              </div>
            </div>

            <div className="row-sm">
              <div className="col-type">
                <i class="fa-solid fa-file"></i>
                <h8>Nội dung chương</h8>
              </div>
              <div className="col-input">
                <ReactQuill
                  value={content}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row-save-chapter">
              <button type="submit" className="save-chapter">
                Lưu
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmitAddChapter}>
            <div className="row-sm">
              <div className="col-type">
                <i class="fa-solid fa-book-journal-whills"></i>
                <h8>Tên chương</h8>
              </div>
              <div className="col-input">
                <input
                  name="nameChap"
                  onChange={(e) => setNameChapter(e.target.value)}
                  id="nameChap"
                  placeholder={"Nhap ten "}
                />
                <div></div>
              </div>
            </div>

            <div className="row-sm">
              <div className="col-type">
                <i class="fa-solid fa-file"></i>
                <h8>Nội dung chương</h8>
              </div>
              <div className="col-input">
                <ReactQuill
                  value={content}
                  placeholder="Nhập nội dung"
                  onChange={handleChange}
                />
                <input
                  type="file"
                  className="ocr-import"
                  name="OCR"
                  style={{
                    backgground: "transparent",
                    paddingLeft: "5px",
                    width: "150px",
                  }}
                // onChange={onFileChange}
                />
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
              )} */}
              </div>
            </div>
            <div className="row-save-chapter">
              <button type="submit" className="save-chapter">
                Lưu
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EdiChaptertModel;
