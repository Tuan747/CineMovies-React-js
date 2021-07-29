import React, { useEffect } from 'react';
import Author from '../../Author/Author';
import { useParams } from "react-router-dom";
import "./DetailMovie.scss";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSlug } from '../../../../redux/MovieSlice';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function DetailMovie() {
    const { t } = useTranslation();
    const params = useParams()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.AllMovies.detailMovie)

    useEffect(() => {
        dispatch(getSlug(params.slug))
    }, [params.slug, dispatch])

    const { name, actor, decription, language, rating, type, image, slug, date, length } = data
    const handleShowRating = [...Array(rating)].map((rating, index) => {
        return <FontAwesomeIcon key={index} icon={faStar} />
    })
    return (<>
        {data === undefined ? <div>Loading...</div> :
            < div >
                <Author />
                <div className="content">
                    <div className="container">
                        <div className="row center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="moviedetail__img">
                                    <img src={image} alt="" className="imgDetail" />
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-8 detail__content">
                                <div className="name">{name}</div>
                                <div className="text__detail">{t('movie_detail.actor')}
                                    <p className="btn_form">{actor}</p>
                                </div>
                                <div className="text__detail">{t('movie_detail.language')}
                                    <p className="btn_form">{language}</p>
                                </div>
                                <div className="text__detail">{t('movie_detail.start')}
                                    <p className="btn_form">{new Date(date?.date_start).toLocaleDateString()}</p>
                                </div>
                                <div className="text__detail">{t('movie_detail.length')}
                                    <p className="btn_form">{length} phut</p>
                                </div>
                                <div className="text__detail">{t('movie_detail.type')}
                                    <p className="btn_form">{type}</p>
                                </div>
                                <div className="decription">{decription}</div>
                                <div className="text__detail">
                                    {t('movie_detail.rating')} {handleShowRating}
                                </div>
                                <div className="btn">
                                    <NavLink to={`/byticket/${(slug)}`} >
                                        <button className="btn__ticket"> {t('movie.buy')}</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }


    </>
    );
}

export default DetailMovie;