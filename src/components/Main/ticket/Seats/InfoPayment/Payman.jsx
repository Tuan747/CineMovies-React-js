import React, { useEffect, useState } from 'react';
import { faMapMarkerAlt, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./Payman.scss"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { METHOD_PAYMENT_MOMO } from '../../../../../constants/index';
import { getData, paymentReset, paymentMethode } from '../../../../../redux/PaymentSlice';
import { toast } from 'react-toastify';
import { resetSeats } from '../../../../../redux/TimeSlice';

function Payman(props) {
    const { nameTheater } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const movie = useSelector((state) => state.AllMovies.detailMovie)
    const timeMovie = useSelector((state) => state.AllTime)
    const idSeats = useSelector((state) => state.AllTime.allSeats)
    const isLogin = useSelector((state) => state.Author.isLogin)
    const payment = useSelector((state) => state.Payment.payment)
    const method = useSelector((state) => state.Payment.method)
    const notifyMethod = () => toast.error(t('toast.method'));
    const notifySeat = () => toast.error(t('toast.seat'));
    const notifyLogin = () => toast.error(t('toast.required_login'));

    const { name, length } = movie
    const { date, hour, seats, cost, price, amount } = timeMovie
    const { link } = payment

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [dropmethodPayment, setdropmethodPayment] = useState(false);
    const togglemethodPayment = () => setdropmethodPayment(prevState => !prevState);

    useEffect(() => {
        if (link) {
            window.open(link)
            dispatch(paymentReset())
            dispatch(resetSeats())
            window.location.reload();
        }
    }, [dispatch, link])

    function handleClickPayment() {
        if (!isLogin) {
            notifyLogin()
        }
        else if (!method) {
            notifyMethod()
        }
        else if (seats.length === 0) {
            notifySeat()
        }
        else {
            const body = {
                gift: 0,
                number: amount,
                price: price,
                seat: seats
            }
            const id = idSeats._id
            dispatch(getData({ id, body }))
        }
    }

    function selectMethod(selectmethod) {
        if (method !== selectmethod) {
            dispatch(paymentMethode((selectmethod)))
        }
    }

    const methodPayment = <Dropdown isOpen={dropmethodPayment} toggle={togglemethodPayment}>
        <DropdownToggle caret>
            {method ? method : t('ticket.select')}
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={() => selectMethod(METHOD_PAYMENT_MOMO)}>{METHOD_PAYMENT_MOMO}</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    return (
        <div className="detail__payment">
            <h1 className="title__payment">{t('ticket.title')}</h1>
            <div className="info__movies">
                <h3 className="info__movies-name">{name ? name : 'Trong'}</h3>
                <div className="info__movies-time">{length ? length : 'Trong'} phút</div>
                <div className="info__alltime">
                    <div className="info__alltime-theater">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{nameTheater ? nameTheater : 'Trong'}</span>
                    </div>
                    <div className="info__alltime-date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{date ? new Date(date).toLocaleDateString() : 'Trong'}</span>
                    </div>
                    <div className="info__alltime-hour">
                        <FontAwesomeIcon icon={faClock} />
                        <span>{hour ? hour : 'Trong'}</span>
                    </div>
                </div>
                <h3 className="info__movies-seats">
                    <div className="seated">
                        <div>{t('ticket.seat')}</div>
                        <span>{seats.length ? seats.join(', ') : t('ticket.empty_seat')}</span>
                    </div>
                </h3>
                <div className="info__movies-price">
                    <div className="movies-price between">
                        <div>{t('ticket.unit_price')}</div>
                        <span>{cost ? cost : 0} VNĐ</span>
                    </div>
                    <div className="movies-amount between">
                        <div>{t('ticket.number_ticket')}</div>
                        <span>{amount ? amount : 0}</span>
                    </div>
                </div>
                <div className="info__price-total between">
                    <div>{t('ticket.total_price')}</div>
                    <span>{price ? price : 0} VNĐ</span>
                </div>
                <div className="info__price-method between">
                    <div>{t('ticket.method')}</div>
                    <div className="dropdown">
                        {methodPayment}
                    </div>
                </div>
                <div className="btn">
                    <button onClick={handleClickPayment} className="btn_form" type="button">{t('ticket.payment')}</button>
                </div>
            </div>
        </div>
    );
}

export default Payman;