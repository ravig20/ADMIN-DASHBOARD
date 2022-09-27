import React from 'react'
import CardData from '../../components/Card/CardData'
import Chart from '../../components/chart/Chart'

import Navbar from '../../components/navbar/Navbar'
import ProcessBar from '../../components/ProcessBar/ProcessBar'
import SideBar from '../../components/sideBar/SideBar'
import TableTransition from '../../components/TableTransition/TableTransition'
import "./home.scss"
const Home = () => {
  return (
    <div id="home">
      <SideBar />
      <div className='homeContainer'>
        <Navbar />
        <hr />
        <div className='cardsData'>
          <CardData
            heading="Users"
            view="See all user"
            value="400"
            parentage="10 %"

          />
          <CardData
            heading="Product"
            view="View all products"
            value="100"
            parentage="0 %"

          />
          <CardData
            heading="Orders"
            view="View all orders"
            value="100"
            parentage="0 %"

          />
          <CardData
            heading="Earning"
            view="View all earnings "
            value="$ 400"
            parentage="10 %"
          />
        </div>
        <div className='charts-bar'>
          <Chart />
          <ProcessBar />
        </div>
        <div className='home-table'>
          <p>Latest transactions</p>
          <TableTransition />
        </div>
      </div>
    </div>
  )
}

export default Home