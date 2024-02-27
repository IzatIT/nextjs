import { yupResolver } from '@mantine/form';
import * as yup from 'yup';

interface Args {
    minSix: string;
    required: string;
}

export const getLoginForm = ({
    minSix,
    required,
}: Args) => {
    const loginSchema = yup.object().shape({
        login: yup.string().required(required),
        password: yup.string().min(6, minSix).required(required),
    });
    const initialValues: IAuthRequest = {
        login: "",
        password: "",
    }
    return { initialValues, validate: yupResolver(loginSchema) }
}