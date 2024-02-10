import React, { useState, useEffect } from 'react';
import CatModel from '../models/CatModel';
import CatDisplay from '../components/CatDisplay';

const CatController = () => {
    const [catsData, setCatsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchRandomCats();
    }, [page]); // Run the effect whenever page changes

    const fetchRandomCats = async () => {
        setLoading(true);
        const randomCats = await CatModel.getRandomCat(page);
        setCatsData(prevCats => [...prevCats, ...randomCats]);
        setLoading(false);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className='flex flex-col items-center justify-center gap-8'>
            <h1 className='color-blue-800 mt-8 text-[6vw] md:text-[2.3vw] font-bold'>Welcome to Cat World!</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <CatDisplay cats={catsData} onLoadMore={handleLoadMore} />
            )}
        </div>
    );
};

export default CatController;
