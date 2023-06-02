import Logotipo from './Logotipo/Logotipo'
import Navbar from './Navbar/Navbar'
import './Sidenav.css'

function Sidenav() {
    return (
        <>
            <header>
                <Logotipo />
                <Navbar />
            </header>
        </>
    )
}

export default Sidenav