import React, { useState } from 'react';

const CatDisplay = ({ cats, onLoadMore }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = () => {
        setIsLoading(true);
        onLoadMore();
    };

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-9'>
            {cats && cats.map(cat => (
                <div key={cat.id} className='bg-gray-200 p-4 rounded-md w-[95vw] md:w-[30vw] lg:w-[20vw]'>
                    <img src={cat.url} className='h-[50vw] md:h-[20vw] w-[95vw] md:w-[20vw] rounded-md object-cover' alt="Random Cat" />
                    {cat.breeds.length > 0 && (
                        <div className='mt-2'>
                            <p className='text-lg font-semibold'>{cat.breeds[0].name}</p>
                            <p className='text-sm text-gray-600'>{cat.breeds[0].description}</p>
                            <a href={cat.breeds[0].wikipedia_url} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline mt-1 block'>Learn more on Wikipedia</a>
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className='col-span-3 flex justify-center'>
            <button
                onClick={handleLoadMore}
                className='bg-blue-500 text-white px-4 py-2 rounded-md mb-8'
                disabled={isLoading}
            >
                {isLoading ? 'Loading...' : 'Load More'}
            </button>
        </div>
    </>
    );
};

export default CatDisplay;
