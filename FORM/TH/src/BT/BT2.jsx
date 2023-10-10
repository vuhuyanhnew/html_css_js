
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    receiver: yup.string().required("Thiếu người nhận"),
    subject: yup.string().required(" Thiếu chủ đề"),
    message: yup.string().required(" Thiếu nội dung"),
    attachment: yup.mixed().test("fileSize", "Kích thước tệp quá lớn", (value) => {
        if (!value[0]) return true;
        return value[0].size <= 10485760;
    }),
});

const BT2 = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Email Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Người nhận:</label>
                <Controller
                    name="receiver"
                    control={control}
                    render={({ field }) => <input {...field} type="text" />}
                />
                {errors.to && <p>{errors.to.message}</p>}
            </div>
            <div>
                <label>Chủ đề:</label>
                <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => <input {...field} type="text" />}
                />
                {errors.subject && <p>{errors.subject.message}</p>}
            </div>
            <div>
                <label>Nội dung:</label>
                <Controller
                    name="message"
                    control={control}
                    render={({ field }) => <textarea {...field} />}
                />
                {errors.message && <p>{errors.message.message}</p>}
            </div>
            <div>
                <label >Tải lên tệp tin:</label>
                <Controller
                    name="attachment"
                    control={control}
                    render={({ field }) => <input {...field} type="file" />}
                />
                {errors.attachment && <p>{errors.attachment.message}</p>}
            </div>
            <button type="submit">Gửi Email</button>
        </form>
    );
};

export default BT2;
