import { useEffect, useState } from "react"


const usePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const url = 'https://spooky-zombie-00664.herokuapp.com/packages';
        fetch(url)
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return [packages, setPackages];
}

export default usePackages;