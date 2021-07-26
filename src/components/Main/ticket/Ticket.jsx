import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSlug } from '../../../redux/MovieSlice';
import { getIdMovies, getIdTheater, getDate, getHour, resetSeats, resetAllTime, resetHour, resetDate } from '../../../redux/TimeSlice';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Seats from './Seats/Seats'
import './Ticket.scss'
import Author from '../Author/Author';
import { useLocation } from "react-router-dom";

function Ticket() {
    const { t } = useTranslation();
    const params = useParams()
    const dispatch = useDispatch()
    const movie = useSelector((state) => state.AllMovies.detailMovie)
    const allTime = useSelector((state) => state.AllTime)

    const [nameTheater, setTheaterName] = useState()
    const [nameDate, setDateName] = useState()
    const [nameHour, setNameHour] = useState()

    const [dropdownTheater, setdropdownTheater] = useState(false);
    const toggleTheater = () => setdropdownTheater(prevState => !prevState);
    const [dropdownDate, setdropdownDate] = useState(false);
    const toggleDate = () => setdropdownDate(prevState => !prevState);
    const [dropdownHour, setdropdownHour] = useState(false);
    const toggleHour = () => setdropdownHour(prevState => !prevState);
    let location = useLocation();

    useEffect(() => {
        dispatch(getSlug(params.slug))
        dispatch(getIdMovies(movie._id))
    }, [dispatch, params.slug, movie._id])

    useEffect(() => {
        dispatch(resetAllTime())
    }, [dispatch, location.pathname])

    function handleClickTheater(id, name) {
        if (allTime.allTheater) {
            if (allTime.idTheater !== id) {
                setTheaterName(name)
                dispatch(getIdTheater(id))
                dispatch(resetHour())
                dispatch(resetDate())
                dispatch(resetSeats())
            } else {
                dispatch(getIdTheater(id))
            }
        }
    }

    function handleClickDate(date) {
        if (allTime.allDate) {
            if (allTime.date !== date) {
                setDateName(date)
                dispatch(getDate(date))
                dispatch(resetHour())
                dispatch(resetSeats())
            } else {
                dispatch(getDate(date))
            }
        }
    }

    function handleClickHour(hour) {
        if (allTime.allHour) {
            if (allTime.hour !== hour) {
                setNameHour(hour)
                dispatch(getHour(hour))
                dispatch(resetSeats())
            } else {
                dispatch(getHour(hour))
            }
        }
    }

    const theaterRender =
        allTime?.allTheater && allTime.allTheater.length ? allTime.allTheater.map((item, index) => {
            return <DropdownItem key={index} onClick={() => handleClickTheater(item._id, item.name)}>{item.name}</DropdownItem>
        }) : <></>

    const dateRender =
        allTime?.allDate && allTime.allDate.length ? allTime.allDate.map((item, index) => {
            return <DropdownItem key={index} onClick={() => handleClickDate(item)}>{new Date(item).toLocaleDateString()}</DropdownItem>
        }) : <></>

    const hoursRender =
        allTime?.allHour && allTime.allHour.length ? allTime.allHour.map((item, index) => {
            return <DropdownItem key={index} onClick={() => handleClickHour(item)}>{item}</DropdownItem>
        }) : <></>

    return (<>
        <Author />
        <div className="container background__detail">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="movietime__img">
                        <img src={movie.image} alt={movie.name} />
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div className="movietime__info">
                        <h1>{movie.name}</h1>
                        <div className="movietime__select">
                            <div className="movietime__item" >
                                <Dropdown isOpen={dropdownTheater} toggle={toggleTheater}>
                                    <DropdownToggle className="btn_form" caret>
                                        {allTime.idTheater ? nameTheater : `${t('movietime.choose_theater')}`}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {theaterRender}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                            <div className="movietime__item">
                                <Dropdown isOpen={dropdownDate} toggle={toggleDate}>
                                    <DropdownToggle className="btn_form" caret>
                                        {allTime.date ? new Date(nameDate).toLocaleDateString() : `${t('movietime.choose_date')}`}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {dateRender}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                            <div className="movietime__item" >
                                <Dropdown isOpen={dropdownHour} toggle={toggleHour}>
                                    <DropdownToggle className="btn_form" caret>
                                        {allTime.hour ? nameHour : `${t('movietime.choose_hour')}`}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {hoursRender}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className={classNames({
                            'show__notify-active': allTime.hour ? true : false,
                            'show__notify-disable': allTime.hour,
                        })}>
                            <p>{t('movietime.notify')}</p>
                        </div>
                        <div className={classNames({
                            'show__seats-active': allTime.hour,
                            'show__seats-disable': allTime.hour ? false : true,
                        })}>
                            <Seats nameTheater={nameTheater} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Ticket;