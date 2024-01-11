import { IonIcon } from '@ionic/react';
import { search } from 'ionicons/icons';



export const SearchBar = () => {
    return (
        <div 
            className="mx-auto flex justify-center my-2">
            <div 
                className="md:w-2/4 w-5/6 relative flex justify-center mx-auto">
                <input 
                    type="text" 
                    placeholder="Mau Rental Apa Hari Ini?"
                    className="rounded-xl w-full mb-2 mx-auto mt-4 placeholder:text-center py-4 border-gray-200 drop-shadow-lg border-2"
                />
                <IonIcon
                 icon={search}
                  size={'2px'}
                    className="text-2xl cursor-pointer rounded-full bg-orange-400 text-white absolute hover:scale-105 active:scale-95 end-2 top-5 px-3 py-3"/>
            </div>
            
        </div>
    )
}