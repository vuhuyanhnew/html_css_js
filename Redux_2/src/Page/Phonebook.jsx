import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPhoneBook, deletePhoneBook } from "../Store/reducers/phonebook.js";
import { v4 as uuidv4 } from "uuid"

export default function PhoneBook() {


    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            phone: "",
            isFavourite: true

        }

    })

    const phonebookStore = useSelector((state) => state.phonebook);
    console.log("Phonebook", phonebookStore)

    const dispatch = useDispatch()
    const onDelete = (id) => {
        dispatch(deletePhoneBook(id))
    }
    const onSubmit = (values) => {

        const payload = { ...values, id: uuidv4() }
        dispatch(addPhoneBook(payload))
    }
    return (
        <>
            <div>PhoneBook application</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller name="name"
                    control={control}
                    render={({ field }) =>
                        <div>
                            <input {...field} type="text" placeholder="Enter name"></input>
                        </div>}
                />

                <Controller name="phone"
                    control={control}
                    render={({ field }) =>
                        <div>
                            <input {...field} type="tel" placeholder="Enter phone"></input>
                        </div>}
                />
                <Controller name="isFavourite"
                    control={control}
                    render={({ field }) =>
                        <div>
                            <input {...field} type="checkbox" checked={field.value}></input>
                            <label>Favourite</label>
                        </div>
                    }
                />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Favourite</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {phonebookStore.phonebook.map((phonebook, index) => (

                        <tr key={index}>
                            <td>{phonebook.id}</td>
                            <td>{phonebook.name}</td>
                            <td>{phonebook.phone}</td>
                            <td>{phonebook.isFavourite.toString()}</td>
                            <td>
                                <button onClick={() => onDelete(phonebook.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}