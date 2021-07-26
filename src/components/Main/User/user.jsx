import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { logOut } from '../../../redux/authorSlice';
import "./user.scss"

function User() {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const name = useSelector((state) => state.Author.dataUser.name)

    function handleLogout() {
        localStorage.setItem('token', '')
        dispatch(logOut())
    }

    return (
        <div className="container-fluid">
            <Row>
                <Col>
                    <div className="user__info">
                        <div className="user">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="user__name">
                            <span>{name ? name : 'trong'}</span>
                        </div>
                        <div className="more__user">
                            <ul>
                                <Link to="/Info_user"><li>{t('info.info_person')}</li></Link>
                                <li>{t('info.help')}</li>
                                <Link to="/phim">
                                    <li onClick={handleLogout}>{t('info.logout')}</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    );
}

export default User;