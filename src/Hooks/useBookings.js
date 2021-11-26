import { useEffect, useState } from "react"


const useBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = `https://spooky-zombie-00664.herokuapp.com/bookings`;
        ;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return [bookings, setBookings];
}

export default useBookings;