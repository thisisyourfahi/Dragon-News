import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: 1,
        title: "Government announces new education reform policy"
    },
    {
        id: 2,
        title: "Bangladesh wins thrilling cricket series finale"
    },
    {
        id: 3,
        title: "Tech companies reveal latest AI innovations"
    },
    {
        id: 4,
        title: "Heavy rainfall expected across Sylhet this week"
    },
    {
        id: 5,
        title: "Local startup secures international funding"
    }
];

const BreakingNews = () => {
    return (
        <div className='container mx-auto flex gap-4 items-center  p-2 bg-neutral-300'>
                <button className='text-white font-bold bg-red-500 w-fit px-2 py-1 shrink-0'>Latest News</button>
            <div className='min-w-0'>
                <Marquee pauseOnHover={true}>
                    {
                        news.map(n => {
                            return (
                                <span className='mr-14'  key={n.id}>{n.title} </span>
                            )
                        })
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;