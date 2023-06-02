import './Logotipo.css'
import logo from '../../../assets/logo.avif'
function Logotipo(){
    return(
        <>
            <div className='teste'>
              <img src={logo}></img>
              <p>Criptos em Foco</p>
            </div>
        </>
    )
}

export default Logotipo