import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import "./Movies.scss"
import { NavLink, useRouteMatch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { COMMING_SOON_MOVIE, HOST_SERVER, NOW_MOVIE } from '../../../constants';
import { getStatus } from '../../../redux/MovieSlice';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Movies() {
    let match = useRouteMatch();
    const { t } = useTranslation();
    const movies = useSelector((state) => state.AllMovies.movies)
    const dispatch = useDispatch()
    const [typeMovies, setTypeMovies] = useState(NOW_MOVIE)

    useEffect(() => {
        dispatch(getStatus(typeMovies))
    }, [dispatch, typeMovies])

    function handleTrailer(video) {
        if (video) {
            window.open(video)
        }
    }

    const itemMovies =
        movies && movies.length ? movies.map((movie, index) => {
            const { image, name, decription, rating, trailer, slug } = movie
            const handleShowRating = [...Array(rating)].map((rating, index) => {
                return <FontAwesomeIcon key={index} icon={faStar} />
            })
            return (
                <div key={index} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="movie-container">
                        <div className="movie-container__main">
                            <div className="movie-container__main-img" >
                                <img src={image} alt="phim" />
                            </div>

                            <div className="movie-container__main-content">
                                <h3 className="movie-container__main-name">{name}</h3>
                                <p className="movie-container__main-desc" >{decription}</p>
                                <h1 className="movie-container__main-type">{handleShowRating}</h1>
                                <div className="movie-container__main-action">
                                    <ul>
                                        <li href={`${HOST_SERVER}/${trailer}`} onClick={() => handleTrailer(trailer)} target="_blank" rel="nonpener noreferrer">{t('movie.trailer')}</li>

                                        <li className="tiker" >
                                            <NavLink to={`/detailphim/${slug}`}>
                                                {t('movie.buy')}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }) : <></>

    return (
        <div>
            <Author />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="movies-status">
                            <ul>
                                <NavLink onClick={() => setTypeMovies(NOW_MOVIE)}
                                    className={classNames({ 'active': typeMovies === NOW_MOVIE ? true : false })}
                                    style={{ zIndex: "2" }}
                                    to={`${match.url}/${NOW_MOVIE}`}>
                                    <li >{t('footer.ul-2.now_show')}</li>
                                </NavLink>
                                <NavLink onClick={() => setTypeMovies(COMMING_SOON_MOVIE)}
                                    className={classNames({ 'active': typeMovies === COMMING_SOON_MOVIE ? true : false })}
                                    style={{ zIndex: "1" }}
                                    to={`${match.url}/${COMMING_SOON_MOVIE}`}>
                                    <li >{t('footer.ul-2.comming_soon')}</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {itemMovies}
                </div>
            </div>
        </div >
    );
}

export default Movies;

