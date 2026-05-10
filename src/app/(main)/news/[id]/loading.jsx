import React from 'react';

const LoadingPage = () => {
    return (
        <div className='h-[85vh] flex items-center justify-center'>
            <p>
                Loading News Details <span className="loading loading-dots loading-xl"></span>
            </p>
        </div>
    );
};

export default LoadingPage;