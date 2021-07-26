import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HOST_SERVER, TAB_USER_INFOMATION } from '../../../../../constants';
import "./DetailUser.scss"

function DetailUser() {
    const { t } = useTranslation();
    const tab = useSelector((state) => state.SelectTabs.tabs)
    const user = useSelector((state) => state.Author.dataUser)

    const { avartar, name, email, date, point } = user
    return (
        <div className={classNames(
            { "user__detail-active": tab === TAB_USER_INFOMATION },
            { "user__detail-disable": !(tab === TAB_USER_INFOMATION) })}>
            <div className="user__detail">
                <div className="user__detail-img">
                    <img src={`${HOST_SERVER}/${avartar}`} alt="Anh dai dien" />
                </div>
                <div className="user__detail-basic">
                    <div className="detail__basic">Ten <span>{name}</span></div>
                    <div className="detail__basic">{t('user.user_info.email')} <span>{email}</span></div>
                    <div className="detail__basic">{t('user.user_info.dob')} <span>{new Date(date).toLocaleDateString()}</span></div>
                    <div className="detail__basic">{t('user.user_info.point')} <span>{point}</span></div>
                </div>
            </div>
            <button className="btn_form">{t('user.user_info.edit')}</button>
        </div>
    );
}

export default DetailUser;