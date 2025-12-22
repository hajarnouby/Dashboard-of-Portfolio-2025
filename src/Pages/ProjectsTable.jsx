import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../SupaBase';
const ProjectsTable = () => {
    const [loading, setLoading] = useState(true);
    const [Website_Details,setWebsite_Details] = useState("");

             useEffect(()=>{
                 
                 async function getAllProjectsAPI(){
                     const res = await supabase.from("Website_Details").select("*");
                     setWebsite_Details(res.data);
                     //    console.log(res)
                     
                     setLoading(false);
                    }
                    getAllProjectsAPI();
            },[])


if (loading) return 
        <p>Loading...</p>

    return ( 
        <>
        {console.log(Website_Details)}
        {/* <p>Loading...</p> */}

        {
            Website_Details.map((Website_Details)=>{
                console.log(Website_Details);
            })
        }
        </>
     );
}
 
export default ProjectsTable;