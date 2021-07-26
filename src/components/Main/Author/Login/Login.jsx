import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_INCORRECT_PASSWORD, LOGIN_NOT_FOUND, LOGIN_SUCCESS } from '../../../../constants';
import { getValueLogin, loginStatus } from '../../../../redux/authorSlice';
import { toast } from 'react-toastify';

function Login(props) {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const status = useSelector((state) => state.Author.status)

    const notifyLoginSuccess = () => toast.success(t('toast.user.login_success'), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const [notify, setNotify] = useState(null)
    const { toggleFormLogin } = props
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        if (status === LOGIN_SUCCESS) {
            toggleFormLogin(false)
            notifyLoginSuccess()
            dispatch(loginStatus())
        }
        if (status === LOGIN_INCORRECT_PASSWORD) {
            setNotify(t('toast.user.incorrect_password'))
        }
        if (status === LOGIN_NOT_FOUND) {
            setNotify(t('toast.user.not_found'))
        }
    }, [dispatch, status, t, toggleFormLogin])

    function onSubmit(data) {
        dispatch(getValueLogin(data));
    }

    function hideOverlay() {
        toggleFormLogin(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="auth__login-submit" >
                <div className="container-login">
                    <p className="container-login__sugess">{t('auth.login.require')}</p>
                    <div className="input__login">
                        <input className="style-box"{...register("email", { required: true })} placeholder={t('auth.login.username')} />
                        {errors.email && <span>{t('login.require')}</span>}
                        <input className="style-box"{...register("password", { required: true })} placeholder={t('auth.login.password')} type="password" />
                        {errors.password && <span>{t('login.require')}</span>}
                        <h5 style={{ display: notify ? 'block' : 'none' }}>{notify}</h5>
                    </div>
                    <input type="submit" className="btn__submit" />
                </div>

            </form>
            <label className="overlay" onClick={hideOverlay} />
        </>
    );
}

export default Login;