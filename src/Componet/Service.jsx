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
      
        <div className=" w-full bg-[#95B9C7] lg:mt-[-20px] md:mt-[-20px]  lg:flex gap-4 md:flex md:flex-wrap lg:flex-nowrap  lg:flex-row md:flex-row flex-col">
          
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