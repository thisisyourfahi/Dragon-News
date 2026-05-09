import React from 'react';
import NavLink from './NavLink';
import user from '@/assets/user.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between container mx-auto mt-8'>
            <div></div>

            <ul className='flex items-center gap-4 text-[#706F6F]'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            <div className='flex items-center gap-4'>
                <Image src={user} alt='User Image' width={40} height={40} />
                <Link href={'/login'}>
                    <button className='btn btn-info btn-outline'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;