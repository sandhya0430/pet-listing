import React,{useEffect,useState} from'react'
import{useParams} from'react-router-dom'
import { getPetsById } from "../services/api";

const PetDetails=()=>{
    const{id}=useParams();
    const[pet,setPet]=useState(null);
     const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(()=>{
        const fetchPet=async()=>{
            try{
                const response = await getPetsById(id);
                setPet(response.data.pets[0]);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        fetchPet()
      },[id]);

      if(loading)return <p>Loading...</p>

       if (error) return <p>Error:{error}</p>;

        if (!pet) return <p>No pet found</p>;

        return(
            <div>
                <h1>
                    {pet.name}
                </h1>
                <p>
                    {pet.description}
                </p>
            </div>
        )
}

export default PetDetails;