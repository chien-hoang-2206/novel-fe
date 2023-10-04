import React, { useState } from "react";
import "./mynovel.css";
import { TabName } from "../../../components/TextField/TestComponents";
import { Link, Outlet } from "react-router-dom";
function MyNovel() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="box-post-novel">
      {/* tu truyen */}
      <div className="postnv">
        <h2> Tủ Truyện </h2>
      </div>

      <div className="containerTabs">
        {/* tab Name */}
        <div className="bloc-tabs">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <TabName>Danh sách truyện</TabName>
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <TabName>Đang phê duyệt</TabName>
            <div className="number-border"> 2</div>
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <TabName>Bình luận</TabName>
            <div className="number-border">3037</div>
          </div>
        </div>
        {/* content tab  */}
        <div className="content-tabs">
          {/* tab ds truyen */}
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="outlet-edit-novel">
                  <Outlet />
            </div>
            <div className="containerDST">
              <div className="novel">
                <div className="img-div">
                  <img alt='img' className="img-novel-post" src="/demoImg.webp" />
                </div>
                <div className="text-novel-name">
                  <Link to="/post-novel/mynovel/643c1ba9846d4044a2b45786">
                    {" "}
                    <h5> Thiên Long Bát Bộ </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* dang phe duyet */}
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h1>asds</h1>
          </div>

          {/* Binh luan */}
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h1>asds</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNovel;
