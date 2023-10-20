import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addBook, deleteBook, fetchBooks } from "../Store/reducers/book";


const Book = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            userId: "",
            id: "",
            title: ""
        }
    });

    const dispatch = useDispatch();
    const bookStore = useSelector((state) => state.book);
    const titles = useSelector(state => state.book.titles);
    const onSubmit = (values) => {
        dispatch(addBook(values));
    };

    const handleDelete = (index) => {
        dispatch(deleteBook(index));
    };

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);
    return (
        <div>
            <h2>Book Management App</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="userId"
                    control={control}
                    render={({ field }) => (
                        <input {...field} type="text" placeholder="Enter user id" />
                    )}
                />
                <Controller
                    name="id"
                    control={control}
                    render={({ field }) => (
                        <input {...field} type="text" placeholder="Enter id" />
                    )}
                />
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <input {...field} type="text" placeholder="Enter title" />
                    )}
                />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {bookStore.books.map((book) => (
                    <li key={book.id}>
                        {book.title}
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <ul>
                {titles.map(title => (
                    <li key={title}>{title}sadsa</li>
                ))}
            </ul>

        </div>
    );
};

export default Book;
