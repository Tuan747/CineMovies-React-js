import React from 'react';
import "./Footer.scss"

function Footer(props) {
    return (
        <div className="copyright">
            <p>
                <a href="http://online.gov.vn/Home/WebDetails/51398" target="blank">
                    <img src="http://cinestar.com.vn/catalog/view/theme/default/images/dathongbao.png" alt="Footer" />
                </a>
            </p>
            <p>
                CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO
                <br />
                ĐỊA CHỈ: 135 HAI BÀ TRƯNG, PHƯỜNG BẾN NGHÉ, QUẬN 1, TP.HCM
                <br />
                GIẤY CNĐKDN SỐ: 0312742744, ĐĂNG KÝ LẦN ĐẦU NGÀY 18/04/2014, ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2 NGÀY 15/09/2014, CẤP BỞI SỞ KH&ĐT TP.HCM
                <br />
                2015 © <strong>CINESTAR</strong>. All rights reserved.
            </p>
        </div>
    );
}

export default Footer;