import React from 'react'
import {Outlet,Link} from "react-router-dom"


const Layout = () => {
  return (
    <div className='mt-5'>
        <Link to="/user" className='mx-10 text-xl text-blue-600 font-semibold'>User</Link>
        <Link to="/admin" className='text-xl text-blue-600 font-semibold'>Admin</Link>
        <Outlet/>
    </div>
  )
}

export default Layout