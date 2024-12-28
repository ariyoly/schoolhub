"use client"

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];






const EventCalender = () => {

    
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);


    return (
        <div className="bg-white p-4 rounded-md">
            {isClient ? (<Calendar/>) : (<p>Loading</p>)}
            <div className=""></div>
        </div>
    )
}

export default EventCalender