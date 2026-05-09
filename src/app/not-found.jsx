import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='w-1/2 mx-auto text-center p-10 space-y-4'>
            <h2 className='text-5xl font-bold'>Page Not Found!</h2>
            <Link href={'/'}>
                <button className='btn btn-neutral btn-outline'>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;