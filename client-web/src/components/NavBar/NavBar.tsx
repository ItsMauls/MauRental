import { personCircle, menuSharp, arrowRedoOutline } from 'ionicons/icons';
import { SearchBar } from './SearchBar';
import { Categories } from './Categories';
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IonIcon } from '@ionic/react';

export const NavBar = () => {
    const { pathname } = useLocation()
    const home = pathname === '/'
    return (
        <>
        <div className='sticky top-0 z-50 bg-white'>
            <nav className="border-b-2 border-gray-100 px-4 mx-auto ">
                <div className="hidden md:grid items-center grid-cols-3 pt-2 justify-end">
                    <Link to={'/'}>
                        <h1 className="text-3xl text-orange-500 font-manrope">Maurental</h1>
                    </Link>
                    <div className="flex justify-between w-2/3 text-center mx-auto">
                        {/* <Link to={'/home'}> */}
                            {/* <h1 className="">Home</h1> */}
                        {/* </Link> */}
                        
                        {/* <Link to={'/home'}> */}
                            {/* <h1 className="">Contact</h1> */}
                        {/* </Link> */}
                    </div>
                    <div id="userSection" className="hover:shadow-xl hover:scale-105 rounded-3xl ml-auto border-2 border-gray-300 md:w-1/5">
                        <div className='flex items-center p-2 justify-between mx-auto'>
                            <div className='mx-auto'>
                                <img className='md:w-2/3' src={menuSharp} alt="" />
                            </div>
                            <div className="mx-auto">
                                <img className='md:w-2/3 ml-auto' src={personCircle} alt="" />               
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='visible py-3 z-40 sticky md:hidden'>
                        <div className='flex justify-between'>
                            <h1 >{'< Home'}</h1>
                                <div className="flex items-center hover:bg-gray-200 rounded-lg px-2 cursor-pointer delay-75 transition">
                                    <IonIcon 
                                    icon={arrowRedoOutline}  
                                    />
                                    <h1 className="mx-1 underline underline-offset-2">Share</h1>
                                </div>
                        </div>
                    </div>
            <SearchBar />
            </nav>
            { home && <Categories />}
        </div>
        <Outlet />  
        </>
    )
}

