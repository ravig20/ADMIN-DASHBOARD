import React from 'react'
import "./sideBar.scss"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpIcon from '@mui/icons-material/Help';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <span className='logoIcon'>Ravi Dashboard</span>
            </div>

            <hr />

            <div className='center'>
                <ul>
                    <p className='titles'>MAIN</p>
                    <li>
                        <DashboardCustomizeIcon className='icons-item' />
                        <span>Dashboard</span>
                    </li>
                    <p className='titles'>LISTS</p>

                    <Link to="/userdata">
                        <li>
                            <AccountCircleIcon className='icons-item' />
                            <span>User</span>
                        </li>
                    </Link>
                    <Link to="/adduser">
                        <li>
                            <AddIcon className='icons-item' />
                            <span>Add User</span>
                        </li>
                    </Link>
                    <li>
                        <StoreIcon className='icons-item' />
                        <span>Product</span>
                    </li>
                    <li>
                        <AddTaskIcon className='icons-item' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icons-item' />
                        <span>Delivery</span>
                    </li>
                    <p className='titles'>USEFUL</p>
                    <li>
                        <QueryStatsIcon className='icons-item' />

                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className='icons-item' />
                        <span>Notification</span>
                    </li>
                    <li>
                        <HelpIcon className='icons-item' />
                        <span>Help </span>
                    </li>

                    <p className='titles'>SERVICES</p>

                    <li>
                        <SettingsSystemDaydreamIcon className='icons-item' />
                        <span>System Info</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icons-item' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsSuggestIcon className='icons-item' />
                        <span>Settings</span>
                    </li>

                    <p className='titles'>USER INFO</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icons-item' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icons-item' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default SideBar