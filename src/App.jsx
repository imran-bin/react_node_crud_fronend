 
 
 
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
 const handleAddUser =event=>{
 

  event.preventDefault()
  const form =event.target;
  const name = form.name.value
  const email = form.email.value
  const user = {name,email}
  console.log(user);

  fetch('http://localhost:3000/users',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },body:JSON.stringify(user)
  })
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    if(data.insertedId){
      alert("User added successfullay ")
      form.reset()
    }
   })
 

 }

  return (
    <>
      <h1>Simple crud</h1>

      <form action="" onSubmit={handleAddUser}>
        <input type="text"  name="name"/>
        <br />
        <input type="email" name='email' /> <br />
        <input type="submit" value="Add  user" />


      </form>
       
    </>
  )
}

export default App
