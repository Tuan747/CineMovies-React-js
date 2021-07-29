import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TAB_USER_HISTORY, TAB_USER_INFOMATION } from '../../../../constants';
import { getTabs } from '../../../../redux/Selecting_userSlice';
import Author from '../../Author/Author';
import DetailUser from './DetailUser/DetailUser';
import HistoryPayment from './HistoryPayment/HistoryPayment';
import "./InfoUser.scss"

function InfoUser() {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const tab = useSelector((state) => state.SelectTabs.tabs)

    function handleClickChangeTab(tabs) {
        dispatch(getTabs(tabs))
    }

    return (<>
        <Author />
        <div className="user">
            <div className="container">
                <div className="show__tab">
                    <ul>
                        <li className={classNames({ 'user__info-active': tab === TAB_USER_INFOMATION })}
                            onClick={() => handleClickChangeTab(TAB_USER_INFOMATION)}
                            style={{ zIndex: 2 }}>
                            <a>{t('user.info')}</a>
                        </li>
                        <li className={classNames({ 'user__info-active': tab === TAB_USER_HISTORY })}
                            onClick={() => handleClickChangeTab(TAB_USER_HISTORY)}
                            style={{ zIndex: 1 }}>
                            <a>{t('user.history')}</a>
                        </li>
                    </ul>
                </div>
                <div className="user__tab-item">
                    <DetailUser />
                    <HistoryPayment />
                </div>
            </div>
        </div>
    </>);
}

export default InfoUser;