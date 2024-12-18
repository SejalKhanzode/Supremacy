import {React, useState, useRef} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useNavigate } from "react-router-dom"
import {logout} from "../../../services/operations/authAPI"
import { Link } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";


const ProfileDropDown = () => {

  const { user } = useSelector((state) => state.profile)

  console.log("user>>",user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    
      <button className="relative" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-1">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[30px] rounded-full object-cover"
          />
        </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-gray-800 overflow-hidden rounded-md border-[1px] border-gray-800 bg-gray-900"
          ref={ref}
        >
          <Link to={`/dashboard/${user.accountType?.toLowerCase()}`} onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-gray-100 hover:bg-gray-700 hover:text-gray-25">
              <MdSpaceDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-gray-100 hover:bg-gray-700 hover:text-gray-25"
          >
            <MdLogout className="text-lg" />
            Logout
          </div>
        </div>
      )}
      </button>
  
  )
}

export default ProfileDropDown
