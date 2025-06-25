import React from 'react'
import { NavLink } from 'react-router-dom'
import pp_fc_hl from "../pages/assets/pp_fc_hl.svg"

function Navbar() {
    return (
        <div className="w-[100%] shadow-xl h-[100px] bg-slate-100 flex ">
            <div className='flex  w-[90%] justify-between m-auto  items-center text-blue-800 font-bold text-2xl'>
                {/* Left Part */}
                <div className='flex gap-[50px]'>
                    {/* logo */}
                    <NavLink to="/">
                        <div>
                            <img src={pp_fc_hl} alt="logo" className='h-[30px]  w-[140px]' />
                        </div>
                    </NavLink>
                    <div>
                        Personal
                    </div>
                    <div>
                        Small Business
                    </div>
                    <div>
                        Enterprice
                    </div>
                    <div>
                        Partners
                    </div>
                    <div>
                        Useful Info
                    </div>
                </div>
                {/* Right part */}
                <div className='flex bg-slate-100 gap-2'>
                    <div>
                        <NavLink to="/login">
                            <button className='border-2 bg-blue-900 w-[100px] rounded-[20px] px-2 py-2 text-white hover:bg-blue-400'>Login</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/signup">
                            <button className='w-[160px] border-2 bg-blue-900  rounded-[20px] px-2 py-2 text-white hover:bg-blue-400'>Sign up</button>
                        </NavLink>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar