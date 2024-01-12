import { useState } from 'react';
import { DateRangePickerInput } from '../DateRangePickerInput';
import { Button } from '../Button';


export const ReservationModal = () => {
    // const [date, setDate] = useState(new Date());
    const harga : number = 5_000_000
    
    return (
        <div className="border shadow-lg ml-1.5 bottom-0  bg-white fixed
             md:relative md:float-end md:w-auto border-gray-300 md:mr-3 rounded-lg">
            <div className="ml-2">
                <h1 className="md:text-4xl text-2xl font-semibold md:ml-0 ml-3 my-2">Rp. {harga}
                    <span className="md:text-lg text-sm text-gray-400">
                        / Hari
                    </span>
                </h1>
                <DateRangePickerInput
                harga={harga}
                />
                <Button
                    title='Reserve'
                    color='amber'/>
            </div>
        </div>
    )
}