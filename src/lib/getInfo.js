    import data from "@/data/data.json";

    export async function getData({ currentPage }){
        const itemsPerPage = 10;
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.books.slice(indexOfFirstItem, indexOfLastItem);
    
        const totalPages = Math.ceil(data.books.length / itemsPerPage);

        return {
            currentItems,
            totalPages
        }
    }
