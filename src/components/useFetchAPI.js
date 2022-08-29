import React, {useEffect, useState} from 'react'
import axios from "axios";


export default function useFetchAPI(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let fetchData = async() => {
            setLoading(true);
            const receivedData = await axios.get(url);
            setData(receivedData.data);
            setLoading(false);
        }
        fetchData();  
    },[url]) 
    let fetchData = async() => {
        setLoading(true);
        const receivedData = await axios.get(url);
        setData(receivedData.data);
        setLoading(false);
    }
    

    // useEffect(() => {
    //     setLoading(true);
    //     let findData = async() =>{
    //         const receivedData = await axios.get(url);
    //         console.log(receivedData.data);
    //         setData(receivedData.data);
    //     }
    //     findData();
    //     setLoading(false);
    // }, [url])
    // 
  return [data, loading, fetchData];
}
