import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [service,setservice]= useState([])
    console.log(service)
    useEffect(()=>{
        fetch('Service.json')
        .then(res=>res.json())
        .then(data=>setservice(data))
    },[])

    return (
        <div>
            {
                service.map(service=><ServiceCard 
                    key={service.id}
                    service={service}>   
                    </ServiceCard>)
            }
            
        </div>
    );
};

export default Service;