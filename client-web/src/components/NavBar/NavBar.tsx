import { personCircle, menuSharp } from 'ionicons/icons';
import { SearchBar } from './SearchBar';
import { Categories } from './Categories';
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <nav className="border-b-2 border-gray-100 px-4 mx-auto ">
                <div className="hidden md:grid items-center grid-cols-3 pt-2 justify-end">
                    <h1 className="text-3xl text-orange-500 font-manrope">Maurental</h1>
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
                <SearchBar />
            </nav>
            <Categories />
        </div>
    )
}