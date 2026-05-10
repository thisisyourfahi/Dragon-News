import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    return (
        <div className='border border-slate-300 space-y-4 rounded-md'>
            {/* author */}
            <div className='bg-slate-300 flex items-center justify-between p-4 rounded-md'>
                {/* author name, img */}
                <div className='flex items-center gap-2'>
                    <Image src={news?.author?.img} alt={'Author Image'} width={40} height={40} className='rounded-full' />
                    <div>
                        <h4 className='font-bold'>{news?.author?.name}</h4>
                        <p className='text-[#706F6F] text-sm'>{news?.author?.published_date}</p>
                    </div>
                </div>
                {/* share and bookmar */}
                <div className='flex items-center gap-2'>
                    <CiShare2 />
                    <CiBookmark />
                </div>
            </div>

            {/* image and details */}
            <div className='space-y-4 px-4'>
                <h2 className='text-2xl font-bold'>{news?.title}</h2>
                <Image src={news?.image_url} width={400} height={400} alt='News Image' className='w-full' />
                <p className='line-clamp-3'>{news?.details}</p>
            </div>

            {/* rating, view and read more*/}
            <div className='flex justify-between items-center px-4 mb-2'>
                {/* rating and view */}
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-1'>
                        <FaStar />
                        {news?.rating?.number}
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaEye />
                        {news?.total_view}
                    </div>
                </div>

                {/* read more button */}
                <Link href={`/news/${news._id}`}>
                    <button className='btn btn-outline'>Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;