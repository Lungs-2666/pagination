    import './Pagination.css';
    import Link from 'next/link';

    const Pagination = ({ currentPage, totalPages }) => {
        return(
            <div className='pagination'>
                {
                    Array.from({length: totalPages}, (_, index) => {
                        const page = index + 1;

                        return (
                            <Link 
                             key={index}
                             href={`/books?page=${page}`}
                             className='book_link'
                             style={{
                                border: page === currentPage ? "1px solid blue" : "1px solid white",
                                cursor: "pointer"
                             }}
                            >

                                {page}
                            
                            </Link>
                        )
                    })
                }
            </div>
        )
    }

    export default Pagination;