import React from 'react'
import { useState } from 'react';

export default function Home() {
    const [song,setSong]=useState([]);
    const [artist,setArtist]=useState("");
    const [songName,setSongName]=useState("");
    const [rdate,setRdate]=useState("");
    const [file,setFile]=useState();
    const [songBool,setSongBool]=useState(false);

    const handleClick=()=>{
setSongBool(true);
    }
    const handleSubmit=e=>{
        setSong([...song,{name :songName,artistName:artist,date: rdate,icon:file}]);
        setSongBool(false);
    }
  return (
    <div>
        <div className="top-songs">
            <h3>Top 10 Songs</h3>
           
        </div>
        {songBool?(<><div className="form">
            <form onSubmit={(e)=>e.preventDefault()}>
                <label>Enter Song Name :</label>
                <input required value={songName} onChange={(e)=>setSongName(e.target.value)} type="text"/><br></br>
                <label>Enter Artist Name :</label>
                <input required value={artist} onChange={(e)=>setArtist(e.target.value)} type="text"/><br></br>
                <label>Enter Release Date :</label>
                <input required value={rdate} onChange={(e)=>setRdate(e.target.value)} type="date"/><br></br>
                <label>Enter song icon :</label>
                <input required onChange={(e)=>{setFile(URL.createObjectURL(e.target.files[0]))}} type="file"/>
                <img src={file} alt="img"/><br></br>
                <button onClick={handleSubmit}>Add Song</button>
            </form>
        </div></>):(<> <button onClick={handleClick}>+ Add Songs</button>
        </>)}
        <table>
            <thead>
           <tr>
               <th>
                   Sr.No
               </th>
               <th>
                   Image
               </th>
               <th>
                   Song Name
               </th>
               <th>
                   Released Date
               </th>
               <th>
                  Artist Name 
               </th>
           </tr></thead>
           <tbody>
               {song.map((e,key)=>{ return (<tr key={key}>
                   <td>
                    {key+1}
               </td>
                   <td>{e.name}</td>
                   <td><img src={file} alt="img"/></td>
                   <td>{e.artistName}</td>
                   <td>{e.date}</td>
               </tr>)})}</tbody>
        </table>
      
    </div>
  )
}
