import { useState } from 'react';
import  DateRangePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { countDay } from '../helpers/countDay';

export const DateRangePickerInput = () => {
    const [startDate, setStartDate] = useState<Date >(new Date());
    const [endDate, setEndDate] = useState<Date >(new Date());
    const day = countDay(startDate, endDate)
    console.log(day)
    return (
        <div className='flex mx-auto justify-center my-2'>
            <div>
                <label className='font-semibold'>Check-In</label>
                    <DateRangePicker
                                className='rounded-lg py-2 text-center border border-gray-400'
                                selectsStart
                                placeholderText='Add Date'
                                selected={startDate}
                                onChange={(date : Date ) => date && setStartDate(date)}
                                startDate={startDate}
                            />
            </div>
                <div>
                    <label className='font-semibold'>Check-Out</label>
                        <DateRangePicker
                            className='rounded-lg py-2 text-center border border-gray-400'
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