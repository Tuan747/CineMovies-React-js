import React, { useRef } from 'react';
import "./Header.scss"
import { NavLink, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getValue } from '../../redux/SearchSlice';
import logo from "./../../resourses/img/logo.png";

function Header() {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const user = useSelector(state => state.Author)
  const waitingSearch = useRef(null)
  const history = useHistory()

  const admin = user.isLogin && user.dataUSer?.role === false ?
    <NavLink activeClassName="checked" to="/admin"><li>{t('header.nav.admin')}</li></NavLink>
    : <></>

  function handleChangeSearch(e) {
    if (waitingSearch.current) {
      clearTimeout(waitingSearch.current)
    }
    waitingSearch.current = setTimeout(() => {
      if (e.target.value !== '') {
        dispatch(getValue(e.target.value))
        history.replace('/search')
      }
    }, 500)
  }

  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 .col-sm-6 .col-md-8">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className=".col-xs-6 .col-md-4">
            <div className="header__selected">
              <div className="header__search">
                <input type="text" className="header__search-input" onChange={handleChangeSearch} placeholder="Tìm Kiếm..." />
              </div>
            </div>
            <div className="header__nav">
              <ul className="header__nav-bar">
                <NavLink activeClassName="checked" to="/phim"><li>{t('header.nav.movie')}</li></NavLink >
                <NavLink activeClassName="checked" to="/lich"><li>{t('header.nav.schedule')}</li></NavLink >
                <NavLink activeClassName="checked" to="/khuyenmai"><li>{t('header.nav.promotion')}</li></NavLink >
                <NavLink activeClassName="checked" to="/tintuc"><li>{t('header.nav.news')}</li></NavLink >
                {admin}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </header >
































    // <header id="header">
    //   {/* header__logo */}
    //   <div className="header__logo">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col">
    //           <img src="http://cinestar.com.vn/pictures/moi/9Logo/white-2018.png" alt="" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* header__search */}
    //   <div className="header__search">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col">
    //           <input type="text" className="header__search--input" placeholder="Tìm Kiếm..." />
    //           <i className="fas fa-search" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* header__nav */}
    //   <div className="header__nav">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col">
    //           <ul className="header__nav--bar">
    //             <li><a href="">Phim</a></li>
    //             <li><a href="">Lịch</a></li>
    //             <li><a href="">Rạp Và Giá</a></li>
    //             <li><a href="">Khuyến Mãi</a></li>
    //             <li><a href="">Hỏi Và Đáp</a></li>
    //             <li><a href="">Tin Tức</a></li>
    //             <li><a href="">Giới Thiệu</a></li>
    //             <li><a href="">Liên Hệ</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}

export default Header;