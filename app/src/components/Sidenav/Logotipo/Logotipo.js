import { ContainerLogo } from './Logotipo.jsx'
import logo from '../../../assets/logo.avif'
function Logotipo() {
    return (
        <>
            <ContainerLogo>
                <img src={logo}></img>
                <p>Criptos em Foco</p>
            </ContainerLogo>
        </>
    )
}

export default Logotipo