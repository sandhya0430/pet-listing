import React,{useContext,useEffect}from'react';
import { GlobalStateContext } from '../context/GlobalStateContext';
import { getPets } from '../services/api';
const PetList=()=>
    {
    const{pets,setPets,loading,setLoading,error,setError}=useContext(GlobalStateContext);
    useEffect(()=>{
        const fetchPets=async()=>
            {
            setLoading(true);
            try{
                const response =await getPets();
                setPets(response.data.pets);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        fetchPets()},[setPets,setLoading,setError]);
        if(loading)return <p>Loading..</p>
        if(error)return<p>Error..{error}</p>
        return(
            <div>
                <h1>Pet List</h1>
                <ul>
                    {
                        pets.map((pet)=>(<li key={pet.id}>{pet.name}</li>))
                    }
                </ul>
            </div>

        )

    };

    export default PetList;