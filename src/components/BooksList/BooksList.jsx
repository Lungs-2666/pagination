    'use client'

    import { useState, useEffect } from "react";
    import { fetchData } from "@/data/data";
    import './BooksList.css';

    const BooksList = ({ page }) => {
        const [books, setBooks] = useState([]);

        useEffect(() => {

            fetchData(page)
                .then(data => {
                    setBooks( data );
                }).catch(err => {
                    console.error( err );
                });

        }, [page]);

        return (
            <ul className="book_list">
                {books.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title}
                            <br />
                            {item.year}
                            <br />
                            {item.author}
                        </li>
                    )
                })}
            </ul>
        )
    }

    export default BooksList;