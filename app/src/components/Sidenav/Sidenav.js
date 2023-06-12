import Logotipo from './Logotipo/Logotipo'
import Navbar from './Navbar/Navbar'
import {MenuLateral} from'./Sidenav.jsx'

function Sidenav() {
    return (
        <>
            <MenuLateral>
                <Logotipo />
                <Navbar />
            </MenuLateral>
        </>
    )
}

export default Sidenav