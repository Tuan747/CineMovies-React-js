import { Button } from 'reactstrap';
import classNames from 'classnames';
import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TAB_USER_HISTORY } from '../../../../../constants';
import { getHistory } from '../../../../../redux/Selecting_userSlice';
import Countdown from 'react-countdown';
import "./HistoryPayment.scss"
import { rePayment } from '../../../../../redux/PaymentSlice';

function HistoryPayment() {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const tab = useSelector((state) => state.SelectTabs.tabs)
    const history = useSelector((state) => state.SelectTabs.historys)
    const payment = useSelector((state) => state.Payment.payment)
    const { link } = payment

    const renderTime = ({ minutes, seconds, completed }) => {
        if (completed) {
            return <span>00:00</span>
        }
        else {
            return <span>{minutes}:{seconds}</span>;
        }
    }

    useEffect(() => {
        dispatch(getHistory())
    }, [dispatch])

    function handlePayment(item) {
        dispatch(rePayment(item))
    }

    useEffect(() => {
        if (link) {
            window.open(link)
        }
    }, [link])

    const renderHistory = history?.map((item, index) => {
        const { namemovie, paid, price, createdAt, status } = item
        return (
            <tr key={index}>
                <td className="disable">{index + 1}</td>
                <td>{namemovie}</td>
                <td className="disable">{status ? t('history.status_success') : t('history.status_cancel')}</td>
                <td>{price} VND</td>
                <td className="disable">{new Date(createdAt).toLocaleDateString()}</td>
                <td>{paid ? t('history.paid') : t('history.unpaid')}</td>
                <td>{status && paid === false
                    ? <Countdown date={new Date(createdAt).getTime() + 600000} renderer={renderTime} />
                    : <span>00:00</span>}
                </td>
                <td>
                    {(status && paid) || status === false
                        ? <Button className="btn__ticket-delete">{t('history.delete')}</Button>
                        : <Button onClick={() => handlePayment(item)} className="btn__ticket-payment">{t('history.payment')}</Button>}
                </td>
            </tr>
        )
    })

    return (
        <div className="history">
            <div className={classNames(
                { "user__history-active": tab === TAB_USER_HISTORY },
                { "user__history-disable": !(tab === TAB_USER_HISTORY) },
            )}>
                <table>
                    <thead>
                        <tr>
                            <th className="disable">#</th>
                            <th>{t('history.name')}</th>
                            <th className="disable">{t('history.status')}</th>
                            <th>{t('history.price')}</th>
                            <th className="disable">{t('history.created_at')}</th>
                            <th>{t('history.payment')}</th>
                            <th>{t('history.time')}</th>
                            <th>{t('history.action')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderHistory}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HistoryPayment;