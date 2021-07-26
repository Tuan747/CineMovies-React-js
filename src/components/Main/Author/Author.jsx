import React, { useEffect, useState } from 'react';
import Login from "./Login/Login";
import Register from "./Register/Register";
import "./Author.scss"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import User from '../User/user';
import { getUser } from '../../../redux/authorSlice';

function Author() {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);
    const isLogin = useSelector((state) => state.Author.isLogin)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getUser())
        }
    }, [dispatch])

    function toggleForm() {
        setToggle(!toggle)
    }

    function toggleFormLogin() {
        setToggleLogin(!toggleLogin)
    }

    return (
        <div className="auth">
            <div className="container-fluid">
                <div className="row">
                    <div className="auth__container">

                        <div className="col">
                            <div className={classNames({
                                'show__auth-active': isLogin ? true : false,
                                'show__auth-disable': isLogin,
                            })}>
                                <div className="auth__event">
                                    <div className="auth__register">
                                        <span onClick={toggleForm}>{t('auth.register.title')}</span>
                                        {toggle ? <Register toggleForm={toggleForm} /> : ''}
                                    </div>
                                    <div className="auth__login">
                                        <span onClick={toggleFormLogin}>{t('auth.login.title')}</span>
                                        {toggleLogin ? <Login toggleFormLogin={toggleFormLogin} /> : ''}
                                    </div>
                                </div>
                            </div>

                            <div className={classNames({
                                'show__auth-active': isLogin,
                                'show__auth-disable': isLogin ? false : true,
                            })}><User />
                            </div>

                        </div>

                        <div className="col">
                            <div className="phonenumber">
                                <i className="phonenumber__icon"></i>
                                <a className="phonenumber__number" href="tel:{t('auth.hotline')}">{t('auth.hotline')}</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
}

export default Author;