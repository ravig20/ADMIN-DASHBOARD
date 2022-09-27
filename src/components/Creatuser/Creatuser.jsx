import { Avatar } from '@mui/material'
import React from 'react'
import "./Creatuser.scss"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const Creatuser = () => {

  return (
    <div className='Creatuser'>
        <div className='shadow top'>
            <h1>Add New User</h1>
        </div>
       <div className='shadow bottom'>
            <div className="left">
                <Avatar className='avatar' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
               <span><AddAPhotoIcon/> <h4>Uplode Image</h4></span> 
            </div>
            <div className="right">
                <form>
                    <div className='fromInput'>
                        <label>USER NAME</label>
                        <input type="text" placeholder='john_deo' />
                    </div>
                    <div className='fromInput'>
                        <label>NAME</label>
                        <input type="text" placeholder='john deo' />
                    </div>
                    <div className='fromInput'>
                        <label>EMAIL</label>
                        <input type="text" placeholder='johndeo@gmail.com' />
                    </div>
                    <div className='fromInput'>
                        <label>PHONE</label>
                        <input type="number" placeholder='+1456329875' />
                    </div>
                    <div className='fromInput'>
                        <label>PASSWORD</label>
                        <input type="password"  />
                    </div>
                    <div className='fromInput'>
                        <label>ADDRESS</label>
                        <input type="text" placeholder='Ekta Soc,shiv Dham, Film City Road,' />
                    </div>
                    <div className='fromInput'>
                        <label>PIN CODE</label>
                        <input type="number" placeholder='470336' />
                    </div>
                    <div className='fromInput'>
                        <label>COUNTRY</label>
                        <input type="text" placeholder='USA' />
                    </div>
                       <button>Send</button>
                    
                </form>
            </div>
        </div>

    </div>
  )
}

export default Creatuser