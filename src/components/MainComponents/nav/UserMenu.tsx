
import {Menu} from '@headlessui/react'
import { signOut } from 'next-auth/react';
import Link from 'next/link';

interface Iprops{
    children: React.ReactNode;
}
const UserMenu:React.FC<Iprops> = ({children}) => {
    //TODO (maybe): add Remove cookie (cart) to remove the cookie of information carts
    //reset the redux state an remove all carts saved
    const logoutClickHandler = () => signOut({callbackUrl:'/login'})
    

    return (
        <>
            <Menu as={'div'} className='relative inline-block'>
                <Menu.Button className={'text-blue-600'}>
                    {children}
                </Menu.Button>
                <Menu.Items className={'absolute right-0 rounded-md w-56 origin-top-right shadow-lg shadow-zinc-800 z-30 bg-white'}>
                    <Menu.Item>
                        <span>
                            <Link href={'/profile'}>
                                <a  className='dropdown-link mt-4'>
                                    Profile
                                </a>
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item>
                        <span>
                            <Link href={'/order-history'}>
                                <a  className='dropdown-link'>
                                    Order History
                                </a>
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item>
                       <span>
                                <a  className='dropdown-link mb-4'
                                    href='#' 
                                    onClick={logoutClickHandler}
                                >
                                    Logout
                                </a>
                        </span>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </>
    )
}

export default UserMenu
