import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().required("Password is needed"),
});

const TH2 = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Login data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Email:</div>
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <div>
                        <input {...field} type="text" />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                )}
            />
            <div>Password:</div>
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <div>
                        <input {...field} type="password" />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                )}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default TH2;
