import { useState } from 'react';
import { DateRangePickerInput } from '../DateRangePickerInput';
import { Button } from '../Button';


export const ReservationModal = () => {
    // const [date, setDate] = useState(new Date());
    const harga : number = 5_000_000

    return (
        <div className="border shadow-lg border-gray-300 mr-3 rounded-lg">
            <div className="ml-2">
                <h1 className="text-4xl my-4">Rp. {harga}
                    <span className="text-lg text-gray-400">
                        / Hari
                    </span>
                </h1>
                <DateRangePickerInput
                />
                <Button 
                    title='Reserve'
                    color='amber'/>
            </div>
        </div>
    )
}