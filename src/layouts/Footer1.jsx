import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
function Footer1() {
  return (
    <div className=' z-50 bg-white border-2 bottom-0 w-full max-md:block hidden fixed' >
        <div className='flex justify-around py-1 items-center '>
            <div className='flex flex-col items-center justify-center'>
             <PlaceIcon style={{width:40}}/>
             <h6 className='text-[#7A7B7E] text-[14px] '>Track orders</h6>

            </div>
            <div className='flex flex-col items-center justify-center'>
             <AppsIcon style={{width:46}}/>
             <h6 className='text-[#7A7B7E] text-[14px] '>Category</h6>

            </div>
            <div className='flex flex-col items-center justify-center'>
             <PersonIcon style={{width:40}}/>
             <h6 className='text-[#7A7B7E] text-[14px] '>Profile</h6>

            </div>
        </div>
    </div>
  )
}

export default Footer1