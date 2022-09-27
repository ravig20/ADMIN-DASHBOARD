import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import "./UserCard.scss"
const UserCard = ({
  userInfo
}) => {
  return (
    <div className='User-Card'>
    <div className='User-Card-header'>
        <p> INFORMATION</p>
        <span><EditIcon className='edit-icon'/>Edit </span>  
    </div>
    <div className='User-Card-footer'>
            <img  src={userInfo.img} alt='pic'/>
            <div className='user-info'>
              <ul>
              <p>{userInfo.username}</p>
                <li>
                  <span>Email:</span>{userInfo.email}
                </li>
                <li>
                  <span>phone:</span> {userInfo.phone}
                </li>
                <li>
                  <span>Address:</span> {userInfo.Address}
                </li>
                <li>
                  <span>Country:</span> {userInfo.Country}
                </li>
              </ul>
              

            </div>
    </div>
    </div>
  )
}

export default UserCard