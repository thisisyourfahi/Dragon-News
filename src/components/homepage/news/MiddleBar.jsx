import React from 'react';
import NewsCard from './NewsCard';

const MiddleBar = ({ allNews }) => {    
    return (
        <div className='space-y-4'>
            <p className="font-bold text-xl">All News</p>

            <div className='space-y-4'>
                {
                    allNews.length > 0 ? <>
                        {allNews.map(n => <NewsCard key={n._id} news={n} />)}
                    </> : <>
                        <div className='border border-slate-300 rounded-md'>
                            <h2 className='text-3xl font-semibold my-10 text-center p-10'>No News of this category available at the moment</h2>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default MiddleBar;