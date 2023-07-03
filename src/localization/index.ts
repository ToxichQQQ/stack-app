import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                    form_login: "Login",
                    form_password: "Password",
                    form_submit: 'Submit',
                    form_user_name:'User Name',
                    form_registration:'Registration',
                    feature_chat: 'Chat',
                    feature_meet: 'Meet',
                }
            },
            ru: {
                translation: {
                    form_login: "Логин",
                    form_password: "Пароль",
                    form_submit: "Войти",
                    form_user_name:'Имя пользователя',
                    form_registration: 'Зарегистрироваться',
                    feature_chat: 'Чат',
                    feature_meet: 'Видеозвонок',
                }
            },
        },
        lng: "en",
        fallbackLng: "en"
    })

export default  i18n