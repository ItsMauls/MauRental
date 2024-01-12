import { useState } from 'react';
import  DateRangePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { countDay } from '../helpers/countDay';

export const DateRangePickerInput = ({harga} : {harga:number}) => {
    const [startDate, setStartDate] = useState<Date >(new Date());
    const [endDate, setEndDate] = useState<Date >(new Date());
    const day = countDay(startDate, endDate)
    console.log(`total harga = ${day * harga}`)
    return (
        <div className='flex mx-auto justify-center p-4'>
            <div className=''>
                <label className='font-semibold block'>Check-In</label>
                    <DateRangePicker
                                className='py-2 text-center border border-gray-400'
                                selectsStart
                                placeholderText='Add Date'
                                selected={startDate}
                                onChange={(date : Date ) => date && setStartDate(date)}
                                startDate={startDate}
                            />
            </div>
                <div>
                    <label className='font-semibold block'>Check-Out</label>
                        <DateRangePicker
                            className='py-2 text-center border border-gray-400'
                            selectsEnd
                            placeholderText='Add Date'
                            selected={endDate}
                            onChange={(date : Date ) => date && setEndDate(date)}
                            endDate={endDate}
                            startDate={startDate}
                            minDate={startDate}
                        />
                </div>
                    
        </div>
    )
}