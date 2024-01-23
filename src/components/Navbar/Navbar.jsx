import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
   <>
   <div className='bg-black w-full h-10 flex justify-center items-center'>
<div>
    <img className='w-auto h-10 object-cover'
    src="https://static.vecteezy.com/system/resources/previews/019/766/198/original/apple-logo-apple-icon-transparent-free-png.png" alt="" />
</div>

<div >
<ul className='flex gap-2 text-white font-inter font-[400] text-xs cursor-default'>
            <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'><Link to="/">Home</Link></li>
            <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'><Link to="/about">About</Link></li>
            <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'><Link to="/news">News</Link></li>
            <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'><Link to="/events">Events</Link></li>
            <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'><Link to="/members">Members</Link></li>
        </ul>
</div>
   </div>
   
   </>
  )
}

export default Navbar