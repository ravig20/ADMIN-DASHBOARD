import React from 'react'
import { useParams } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sideBar/SideBar'
import TableTransition from '../../components/TableTransition/TableTransition'
import UserCard from '../../components/UserCard/UserCard'
import { userRows } from '../../utils/api';
import "./user.scss"
const User = () => {
  const {id} = useParams()
  console.log(userRows,id)
  let userInfo = userRows.find(row => row.id === +id);
    
  console.log(userInfo)
  
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <div className='oneUser'>
      <SideBar />

      <div className='oneUser-data'>
        <Navbar />
        <hr />
        <div className='top'>
          <div className='user-left' >
            
            <UserCard userInfo={userInfo}/>
          </div>
          <div className='chart-right' >
          <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
          </div>

        </div>
        <div className='home-table'>
          <p>Latest transactions</p>
          <TableTransition />
        </div>
      </div>
    </div>
  )
}

export default User