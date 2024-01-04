import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users,setUsers]=useState(loadedUsers)
    const handaleDelete = id=>{
        fetch(`http://localhost:3000/users/${id}`,{
            method:'DELETE',

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted successfully')
                const remaining = users.filter(user=>user._id !==id)
                    setUsers(remaining)
                
            }
          })
        
    }
    return (
        <div>
            <h4>{users.length}</h4>
            <div>
                {
                    users.map(user=><p key={user._id}>Name: {user.name}Email: {user.email} <Link to={`/update/${user._id}`}>
                      <button>Update</button>
                    </Link> <button  
                        onClick={()=>handaleDelete(user._id)}
                    > X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;