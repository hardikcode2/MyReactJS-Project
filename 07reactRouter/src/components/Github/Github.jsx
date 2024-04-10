import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setdata]=useState({})
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hardikcode2')
    // .then(response=>response.json())
    // .then(data=>{
    //     setdata(data);
    // })
    
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-xl'>Github followers: {data.followers}
        <img className='rounded-3xl' src={data.avatar_url} alt='Git pic' width={300}/>
    </div>
  )
}

export default Github

export const githubinfoloader = async()=>{
    const response = await fetch('https://api.github.com/users/hardikcode2')
    return response.json()
}