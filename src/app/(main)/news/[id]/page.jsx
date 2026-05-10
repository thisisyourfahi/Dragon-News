import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getNewsById } from '@/lib/data-fetch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa6';

export const generateMetadata = async ({params}) => {
    const {id} = await params;
    const news = await getNewsById(id);

    return {
        title: news.title,
        description: news.details
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsById(id);
    return (
        <div className='container mx-auto mt-10 grid grid-cols-12 gap-4'>
            <div className='col-span-9 space-y-4'>
                <p className="font-bold text-xl">Dragon News</p>
                <div className='border border-slate-300 rounded-md space-y-4'>
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
                    <div className='p-4 space-y-4'>
                        <Image src={news?.image_url} width={400} height={400} alt='News Image' className='w-full' />
                        <h2 className='text-3xl font-bold'>{news?.title}</h2>
                        <p className='text-justify'>{news?.details}</p>
                        <Link href={`/category/${news.category_id}`}>
                            <button className='btn btn-info btn-outline text-xl px-6'>
                                <FaArrowLeft size={30} />
                                All News From This Category
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsDetailsPage;