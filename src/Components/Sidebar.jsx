import React from 'react'
import { navList } from './List'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-scroll'




const Sidebar = ({handleClose}) => {
  
  return (
    <>
    <div className='top-0 min-h-screen w-2/3 py-5 bg-red-500 text-white py-10'>
    <aside>
        <div><AiOutlineClose className='float-right m-5 text-2xl text-white' onClick={handleClose}/></div>
        <div>
          <ul className='gap-100 p-5'>
          {
            navList.map((items, index)=>(
              <Link onClick={handleClose} smooth to={items.linkTo} className='p-5 font-medium text-amber-200 font-serif' key={index}>
                <div>
                {items.title}
                </div>
              </Link>
            ))
          }
          </ul>
        </div>
      </aside>
    </div>
    </>
  )
}

export default Sidebar