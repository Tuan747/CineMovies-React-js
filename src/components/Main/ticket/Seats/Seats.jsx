import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { getSeats, removeSeats } from '../../../../redux/TimeSlice';
import "./Seats.scss"
import Payman from './InfoPayment/Payman';

function Seats(props) {
    const { nameTheater } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const allSeats = useSelector((state) => state.AllTime.allSeats.movietime)
    const seatsSelected = useSelector((state) => state.AllTime.seats)

    function handleSelect(id, available) {
        const price = allSeats.price
        if (available) {
            if (seatsSelected.indexOf(id) < 0) {
                dispatch(getSeats({ seat: id, price: price }))
            } else {
                dispatch(removeSeats({ seat: id, price: price }))
            }
        }
    }

    const renderSeats =
        allSeats?.seat.map((seats, index) => {
            return <div key={index} className="row seat__row">
                {
                    seats.map(({ available, id, _id }) => {
                        return <div key={_id} className="col-1 col-sm-1 seat__colume">
                            <FontAwesomeIcon
                                onClick={() => handleSelect(id, available)}
                                icon={faCouch}
                                className={classNames({
                                    'seat__colume-active': available,
                                    'seat__colume-disable': available ? false : true,
                                    'seat__colume-selecting': seatsSelected.indexOf(id) < 0 ? false : true
                                })}>
                            </FontAwesomeIcon>
                        </div>
                    })
                }
            </div>
        })


    return (
        <div className="ticket">
            <div className="seat">
                {renderSeats}
                <div className="seat__note">
                    <div className="seat__note-item">
                        <FontAwesomeIcon className="seat__choosed" icon={faCouch} />
                        <h1>{t('seat.picked')}</h1>
                    </div>
                    <div className="seat__note-item">
                        <FontAwesomeIcon className="seat__available" icon={faCouch} />
                        <h1>{t('seat.available')}</h1>
                    </div>
                    <div className="seat__note-item">
                        <FontAwesomeIcon className="seat__selecting" icon={faCouch} />
                        <h1>{t('seat.choosing')}</h1>
                    </div>
                </div>
            </div>
            <div className="info__payment">
                <Payman nameTheater={nameTheater} />
            </div>
        </div>
    );
}

export default Seats;