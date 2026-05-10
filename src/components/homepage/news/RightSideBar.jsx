import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div className='space-y-4'>
            <p className="font-bold text-xl">Login With</p>

            <div className='flex flex-col gap-4'>
                <button className='btn btn-primary btn-outline'>
                    <FaGoogle />
                    Login Wigh Google
                </button>
                <button className='btn btn-neutral btn-outline'>
                    <FaGithub />
                    Login Wigh GitHub
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;