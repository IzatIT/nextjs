import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    password: yup.string().min(6, 'Name should have at least 6 letters'),
    login: yup
        .number()
        .required('Invalid')
});

export const loginInitialValues: IAuthRequest = {
    password: "",
    login: ""
}