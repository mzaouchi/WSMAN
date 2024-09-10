import { Link } from "react-router-dom"

const NavUser = ({auth,setAuth}) => {
  return (
    <ul>
        <Link to='/'><li>Home</li></Link>

        {
            auth ?
            <>
            <Link to='/ListUsers'><li>Users</li></Link>
            <li onClick={()=>setAuth(false)}>Logout</li>
            </>
            :
            <li onClick={()=>setAuth(true)}>Login</li>
        }





        
        
        
    </ul>
  )
}

export default NavUser