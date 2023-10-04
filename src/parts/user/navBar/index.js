import { Icon } from "@iconify/react";
import "./Navbar.css";
import React, { useState } from "react";
import {
  NavAfterLogin,
  Navbar,
  NavbarContainer,
  NavBtnLink,
  NavLogo,
  NavLogoPage,
  NavMenuIcon,
} from "./narBarElements";
import LoginModal from "../../../pages/users/LoginModal/LoginModal";
import isLoggedIn from "../../../context/isLoggedIn";
import { Link } from "react-router-dom";



function NarBar() {
  const username = sessionStorage.getItem("username");
  const [click, setClick] = useState(false);
  const [showPostNewnovel] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const loggedIn = isLoggedIn();
  const [width, setWidth] = React.useState(window.innerWidth);


  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 736) {
    return (
      <>
          <div  className="flex h-12 px-3 items-center justify-center ">
            <Link to="/home" className="w-2/12" onClick={closeMobileMenu}>
              <img alt='' className="w-8 h-8 object-fill " src="/LogoPage.png"></img>
            </Link>

            <div className="mx-20  flex w-8/12  items-center    justify-center rounded-2xl h-6 px-1 py-1">
              <input className=" text-xs  h-6 w-full pr-8  pl-2 bg-white  rounded-2xl border-transparent  relative " placeholder="Tìm kiếm" name="SearchValue" />
              <Link to="/search" className="relative right-7 " > <Icon icon="material-symbols:search-rounded" /> </Link>
            </div> 
             <div className="w-2/12 flex items-center" onClick={handleClick}>
              <i style={{ fontSize: 18, alignItems: "flex-end" }} className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>


            {click &&
              <div className="nav-menu active">
                <div>
                  <NavBtnLink className="px-2" to="/home" onClick={closeMobileMenu}>Trang Chủ</NavBtnLink>
                  <NavBtnLink className="px-2" to="/types" onClick={closeMobileMenu}>Thể Loại</NavBtnLink>
                  <NavBtnLink className="px-2" to="/charts/trend" onClick={closeMobileMenu}>Bảng Xếp Hạng</NavBtnLink>
                  {loggedIn ? (
                    <NavBtnLink to="post-novel/profile" onClick={closeMobileMenu} >
                      <p >Hồ Sơ</p>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink className="px-2" to="/login" onClick={closeMobileMenu}>Đăng nhập</NavBtnLink>
                  )}
                </div>
              </div>
            }

          {showLoginModal && <LoginModal onClose={handleCloseModal} />}
        </div>
      </>
    )
  } else {
    return (<>
      <Navbar>
        <NavbarContainer>
          <NavMenuIcon onClick={handleClick} className="flex items-center">
            <i style={{ fontSize: 18, alignItems: "center" }} className={click ? "fas fa-times" : "fas fa-bars"} />
          </NavMenuIcon>
          <div className="flex w-3/12 items-center">
            <NavLogo to="/home" onClick={closeMobileMenu}>
              <NavLogoPage src="/LogoPage.png"></NavLogoPage>
            </NavLogo>

            <ul className=" items-center  text-base flex nav-menu">
              <li>
                <div className="dropdown ">
                  <NavBtnLink to="/types">
                    Thể loại
                  </NavBtnLink>
                  <div className="dropdown-content">
                    <div className="grid-content">
                      <a href="/home">Tất cả</a>
                      <a href="/home">Huyễn huyền</a>
                      <a href="/home">Tiên hiệp</a>
                      <a href="/home">Khoa Huyễn</a>
                      <a href="/home">Đô thị</a>
                      <a href="/home">Huyễn Nghi</a>
                      <a href="/home">Kỳ Ảo</a>
                      <a href="/home">Kiếm hiệp</a>
                      <a href="/home">Đồng nhân</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-bxh">
                  <NavBtnLink to="/charts/trend" >
                    Bảng Xếp Hạng
                  </NavBtnLink>
                  <div className="dropdown-content">
                    <div className="grid-content">
                      <a href="/home">Tất cả</a>
                      <a href="/home">Huyễn huyền</a>
                      <a href="/home">Tiên hiệp</a>
                      <a href="/home">Khoa Huyễn</a>
                      <a href="/home">Đô thị</a>
                      <a href="/home">Huyễn Nghi</a>
                      <a href="/home">Kỳ Ảo</a>
                      <a href="/home">Kiếm hiệp</a>
                      <a href="/home">Đồng nhân</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {showPostNewnovel ?
            <div className="mx-20  flex w-4/12 items-center    justify-center rounded-2xl h-6 px-1 py-1">
              <input className=" text-xs  h-6 w-full pr-8  pl-2 bg-white  rounded-2xl border-transparent  relative " placeholder="Tìm kiếm" name="SearchValue" />

              <Link to="/search" className="relative right-7 " > <Icon icon="material-symbols:search-rounded" /> </Link>
            </div>
            : (
              <div className=" flex  w-9/12 items-center   px-2 justify-end  rounded-2xl h-6  py-1">
                <input className=" text-xs  h-6 w-full pr-8  pl-2 bg-white  rounded-2xl border-transparent  relative " placeholder="Tìm kiếm" name="SearchValue" />
                <Link to="/search" className="relative right-7 " > <Icon icon="material-symbols:search-rounded" /> </Link>
              </div>
            )
          }

          {click &&
            <div className="nav-menu active">
              <div>
                <NavBtnLink className="px-2" to="/home" onClick={closeMobileMenu}>Trang Chủ</NavBtnLink>
                {loggedIn ? (
                  <NavBtnLink to="post-novel/profile" onClick={closeMobileMenu} >
                    <p >Hồ Sơ</p>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink className="px-2" to="/login" onClick={closeMobileMenu}>Đăng nhập</NavBtnLink>
                )}
              </div>
            </div>
          }

          {showPostNewnovel &&
            <div className="flex justify-end w-1/4">
              {loggedIn ? (
                <div className="flex">
                  <NavBtnLink to="/post-novel/post-new-novel" >
                    Đăng Truyện
                  </NavBtnLink>
                  <div className="dropdown-profile px-2 ">
                    <NavAfterLogin>
                      <p >{username}</p>
                      <div className="dropdown-content-profile">
                        <div className="grid-content">
                          <a href="/post-novel/profile">Hồ sơ</a>
                          <a href="/home">Tủ truyện</a>
                          <a href="/post-novel/post-new-novel">Đăng truyện</a>
                          <Link to="/logout">Đăng xuất</Link>
                        </div>
                      </div>
                    </NavAfterLogin>
                  </div>
                </div>
              ) : (
                // Nếu isLogin là false, hiển thị nút đăng nhập
                <div className="flex">
                  <NavBtnLink to="/post-novel/post-new-novel" onClick={handleLoginClick} >
                    Đăng Truyện
                  </NavBtnLink>
                  <NavBtnLink className="px-2" onClick={handleLoginClick}>Đăng nhập</NavBtnLink>
                </div>
              )}
            </div>
          }

        </NavbarContainer>
        {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      </Navbar>
    </>)
  }
}

export default NarBar;
