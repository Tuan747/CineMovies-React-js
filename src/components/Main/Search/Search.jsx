import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HOST_SERVER } from '../../../constants';
import "./Search.scss"

function Search() {
    const { t } = useTranslation();
    const data = useSelector((state) => state.Search)
    const notify = `${t('search.search_start')}${`"${data.value}"`}${t('search.search_center')}${data.result.length}${t('search.search_end')}`

    function handleTrailer(video) {
        if (video) {
            window.open(video)
        }
    }

    const renderItem = data.result.map((item, index) => {
        const { image, name, decription, rating, trailer, slug } = item
        const handleShowRating = [...Array(rating)].map((rating, index) => {
            return <FontAwesomeIcon key={index} icon={faStar} />
        })
        return (
            <div key={index}>
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
    })

    return (
        <div className="search">
            <div className="container movie__container">
                <h1 className="search__notify">
                    {data.result && data.result.length ? notify : t('search.nothing')}
                </h1>
                <div className="movie__content result__search">
                    <div className="row">
                        {renderItem}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Search;