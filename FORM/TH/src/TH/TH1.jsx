import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
const schema = yup.object().shape({
    email: yup.string().required("email is require").email('Email is invalid'),
    password: yup.string().required("password is needed"),
    repassword: yup.string().required("repassword is needed").oneOf([yup.ref("password"), null], "Passwords must match"),
    policy: yup
        .boolean()
        .oneOf([true]),
})
const TH1 = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({

        defaultValues: {
            email: "",
            password: "",
            repassword: "",
            policy: false
        },
        resolver: yupResolver(schema),
    })
    const onSubmitFormcallback = (value) => {
        console.log(value)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitFormcallback)}>
                <div>Email:</div>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => {
                        return <div>
                            <input {...field} type="text" />
                            {errors.email && <p>{errors.email.message}</p>}

                        </div>
                    }}
                />
                <div>Password:</div>
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => {
                        return <div>
                            <input {...field} type="password" />
                            {errors.password && <p>{errors.password.message}</p>}

                        </div>
                    }}
                />
                <div>Re-enter password</div>
                <Controller
                    name="repassword"
                    control={control}
                    render={({ field }) => {
                        return <div>
                            <input {...field} type="password" />
                            {errors.repassword && <p>{errors.repassword.message}</p>}

                        </div>
                    }}
                />
                <Controller name="policy"
                    control={control}
                    render={({ field }) => {
                        return <div>
                            <input {...field} type="checkbox" />

                        </div>
                    }}
                />
                <div>I read and accept the privacy policy</div>
            </form>
            <button type="submit"></button>
        </>
    )
}
export default TH1