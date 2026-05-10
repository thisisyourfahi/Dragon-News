import { getCategories } from '@/lib/data-fetch';
import Link from 'next/link';
import React from 'react';

const LeftSideBar = async ({activeId}) => {
    const data = await getCategories();
    const categories = data.data.news_category;
    
    return (
        <div className='space-y-4'>
            <p className="font-bold text-xl">All Category</p>
            
            <ul className='flex flex-col gap-4 fontbo'>
                {
                    categories.map(category => <li className= {`${activeId === category.category_id && 'bg-slate-200'} p-2 rounded-md`} key={category.category_id}><Link className='block' href={`/category/${category.category_id}`}>{category.category_name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;