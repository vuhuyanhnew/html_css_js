import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required("Name required"),
    address: yup.string().required("Address required"),
    phone: yup.string().required("Phone number required"),
    email: yup.string().email("Invalid Email").required("Email required"),
    symptoms: yup.object().shape({
        fever: yup.boolean(),
        cough: yup.boolean(),
        breathless: yup.boolean(),
    }),
});

const BT1 = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label >Tên:</label>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <input {...field} type="text" />}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Địa chỉ:</label>
                <Controller
                    name="address"
                    control={control}
                    render={({ field }) => <input {...field} type="text" />}
                />
                {errors.address && <p>{errors.address.message}</p>}
            </div>
            <div>
                <label >Số điện thoại:</label>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => <input {...field} type="tel" />}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div>
                <label >Email:</label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <input {...field} type="email" />}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Trong vòng 14 ngày qua, bạn có dấu hiệu triệu chứng gì?</label>
                <div>
                    <label>
                        <Controller
                            name="symptoms.fever"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <input {...field} type="checkbox" />
                                    Sốt
                                </>
                            )}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <Controller
                            name="symptoms.cough"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <input {...field} type="checkbox" />
                                    Ho
                                </>
                            )}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <Controller
                            name="symptoms.breathless"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <input {...field} type="checkbox" />
                                    Khó thở
                                </>
                            )}
                        />
                    </label>
                </div>
        
            </div>
            <button type="submit">Gửi</button>
        </form>
    );
};

export default BT1;
