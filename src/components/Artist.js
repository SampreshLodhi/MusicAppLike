import React from 'react'
import { useState } from 'react';

export default function Artist() {
    const [artist,setArtist]=useState([]);
    const [name,setName]=useState("");
    const [dob,setDob]=useState("");
    const [bio,setBio]=useState("");
    const [bool,setBool]=useState(false);
   const handleClick=e=>{
        setArtist([...artist,{aname:name,adob:dob,abio:bio}]);
        setBool(false);
   }

  return (
    <div>
        {bool?(<><form onSubmit={(e)=>e.preventDefault()} >
          <label>Artist Name :</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} required /><br></br>
          <label>Date of Birth :</label>
          <input  type="date" value={dob} onChange={e=>setDob(e.target.value)} required/><br></br>
          <label>Songs :</label>
          <input  type="text" value={bio} onChange={e=>setBio(e.target.value)} required/><br></br>
          <button onClick={handleClick}>Add Artist</button>
      </form></>):(<button onClick={()=>setBool(true)}>+ Add Artist</button>)}


        <table>
            <thead>
                <tr>
                    <th>Artist Name</th>
                    <th>Date of Birth</th>
                    <th>Songs</th>
                </tr>
            </thead>
            {artist.map((e,key)=>(<tr key={key}>
                <td>{e.aname}</td>
                <td>{e.adob}</td>
                <td>{e.abio}</td>
            </tr>))}
        </table>
      
    </div>
  )
}
