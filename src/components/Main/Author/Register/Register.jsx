import React from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';

export default function Register(props) {
  const { t } = useTranslation();
  const { toggleForm } = props
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  function hideOverlay() {
    toggleForm(false)
  }

  return (
    <>
      <form className="auth__register-submit" onSubmit={handleSubmit(onSubmit)}>
        <div className="container-register">
          <p className="container-register__sugess">{t('auth.register.require')}</p>
          <select {...register("gender")}>
            <option value="female">{t('auth.register.gender.male')}</option>
            <option value="male">{t('auth.register.gender.female')}</option>
          </select>
          <div className="input__register">
            <input {...register("firstName", { required: true })} className="style-box" placeholder={t('auth.register.name')} />
            {errors.email && <span>{t('login.require')}</span>}
            <input {...register("birthday", { required: true })} className="style-box" placeholder={t('auth.register.birthday')} />
            {errors.email && <span>{t('login.require')}</span>}
            <input {...register("address", { required: true })} className="style-box" placeholder={t('auth.register.address')} />
            {errors.email && <span>{t('login.require')}</span>}
            <input {...register("cmnd", { required: true })} className="style-box" placeholder={t('auth.register.CMND')} />
            {errors.email && <span>{t('login.require')}</span>}
            <input {...register("phonenumber", { required: true })} className="style-box" placeholder={t('auth.register.phonenumber')} />
            {errors.email && <span>{t('login.require')}</span>}
            <input {...register("email", { required: true })} className="style-box" placeholder={t('auth.register.email')} />
            {errors.email && <span>{t('login.require')}</span>}
            <input {...register("username", { required: true })} className="style-box" placeholder={t('auth.register.username')} />
            {errors.email && <span>{t('login.require')}</span>}
            <input {...register("password", { required: true })} type="password" className="style-box" placeholder={t('auth.register.password')} />
            {errors.email && <span>{t('login.require')}</span>}
            <input {...register("re-password", { required: true })} type="password" className="style-box" placeholder={t('auth.register.re-password')} />
            {errors.email && <span>{t('login.require')}</span>}
            <div className="container-register__accsess">
              <input type="radio" {...register("accsess", { required: true })} />
              <span color="#e00d7a">{t('auth.register.access')}</span>
            </div>
            {errors.email && <span>{t('login.require')}</span>}
          </div>
          <input type="submit" className="btn__submit" />
        </div>
      </form>
      <label className="overlay" onClick={hideOverlay} />
    </>
  );
}