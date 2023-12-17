import styles from "./register.module.scss";
import {Input} from "@/component/input/Input";
import {Button} from "@/component/button/Button";
import {useForm} from "react-hook-form";
import {useCallback} from "react";
import $api from "@/http/api";
import {Link, useNavigate} from "react-router-dom";

interface FormInput {
    tag: string,
    name: string,
    surname: string,
    login: string,
    password: string,
}

export default function Register() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormInput>()

    const navigate = useNavigate()

    const onSubmit = useCallback(async (data: FormInput) => {
        try {
            const result = await $api.post('/auth/register', {...data})

            window.localStorage.setItem('access_token', result.data['access_token'])
            window.localStorage.setItem('refresh_token', result.data['refresh_token'])
            window.localStorage.setItem('user_id', result.data['user_id'])

            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }, [])


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Регистрация</h2>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    placeholder="Тэг"
                    {...register("tag", {required: "Не может быть пустым"})}
                    errMessage={errors?.login?.message}
                />

                <Input
                    placeholder="Имя"
                    {...register("name",
                        {required: "Не может быть пустым"}
                    )}
                    errMessage={errors?.password?.message}
                />

                <Input
                    placeholder="Фамилия"
                    {...register("surname", {required: "Не может быть пустым"})}
                    errMessage={errors?.password?.message}
                />

                <Input
                    placeholder="Логин"
                    {...register("login", {required: "Не может быть пустым"})}
                    errMessage={errors?.password?.message}
                />

                <Input
                    placeholder="Пароль"
                    type={'password'}
                    {...register("password", {required: "Не может быть пустым"})}
                    errMessage={errors?.password?.message}
                />

                <Button>
                    Зарегистрироваться
                </Button>
                <p
                    className={styles.bottomText}>Уже есть аккаунт?
                    <Link to={'/login'} className={styles.link}>Войти</Link>
                </p>
            </form>
        </div>
    )
}