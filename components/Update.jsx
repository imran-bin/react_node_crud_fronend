 
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadeUser =useLoaderData()
    const handaleUpdate =event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const updateUser = {name,email}
        fetch(`http://localhost:3000/users/${loadeUser._id}`,{
            method:"PUT",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(updateUser)
            
        })
         .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert("Update successfully")
            }
        })
    }
    return (
        <div>
            <h3>Update page{loadeUser.name}</h3>
            <form action="" onSubmit={handaleUpdate}>
                <input type="text" name="name" defaultValue={loadeUser?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loadeUser?.email}/>
                <br />
                <button >Update</button>
            </form>
        </div>
    );
};

export default Update;