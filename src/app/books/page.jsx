    import styles from './style.module.css';
    import Pagination from '@/components/Pagination/Pagination';
    import { getData } from '@/lib/getInfo';
    
    const Home = async ({ searchParams }) => {
        const params = await searchParams;
        const page = Number(params.page) || 1;

        const { currentItems, currentPage, totalPages } = await getData(page);

        return (
            <div className={styles.page}>
                <main className={styles.main}>

                </main>

                <Pagination totalPages={totalPages}/>
            </div>
        )
    }

    export default Home;