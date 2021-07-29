import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Footer.scss"

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="copyright">
            <p>
                <a href="http://online.gov.vn/Home/WebDetails/51398" target="blank">
                    <img src="http://cinestar.com.vn/catalog/view/theme/default/images/dathongbao.png" alt="Footer" />
                </a>
            </p>
            <p>
                {t('footer.line1')}
                <br />
                {t('footer.line2')}
                <br />
                {t('footer.line3')}
                <br />
                {t('footer.line4')}<strong>{t('footer.line5')}</strong>{t('footer.line6')}
            </p>
        </div>
    );
}

export default Footer;