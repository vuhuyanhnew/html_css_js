import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { addStudent, deleteStudent } from "../Store/reducers/student"

const Student = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            subject: "",
            gender: false,

        }
    })
    const studentStore = useSelector((state => state.student))
    const dispatch = useDispatch()
    const onDelete = (id) => {
        dispatch(deleteStudent(id))
    }
    const onSubmit = (values) => {
        const payload = { ...values, id: uuidv4() }
        dispatch(addStudent(payload))
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => <input {...field} type="text" placeholder="name" />}
                    />
                </div>
                <div>
                    <label>Subject:</label>
                    <Controller
                        name="subject"
                        control={control}
                        render={({ field }) => <input {...field} type="text" placeholder="subject" />}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input
                                    {...field}
                                    type="radio"
                                    value="male"
                                    checked={field.value === "male"}
                                />
                                <label>Nam</label>

                                <input
                                    {...field}
                                    type="radio"
                                    value="female"
                                    checked={field.value === "female"}
                                />
                                <label>Nữ</label>
                            </div>
                        )}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {studentStore.students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.subject}</td>
                                <td>{student.gender.toString()}</td>
                                <td>
                                    <button onClick={() => onDelete(student.id)}>Xóa</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Student
