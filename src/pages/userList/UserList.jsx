import React from 'react'
import DataTable from '../../components/dataTable/DataTable'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sideBar/SideBar'
import "./userlist.scss"
const UserList = () => {
  return (
    <div className='UserList'>
       <SideBar />
       <div className='UserList-table'>
        <Navbar/>
        <hr />
        <h1>
          Users Lists
        </h1>
        <DataTable/>
       </div>
    </div>
  )
}

export default UserList