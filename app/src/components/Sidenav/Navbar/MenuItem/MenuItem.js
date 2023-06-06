import './MenuItem.css'

const MenuItem = ({ icons, text, linkPage }) => {
    return (
        <li>
            <div className='iconeMenuItem'>
                {icons}
            </div>
            
            <div className='textoMenuItem'>
                <a href={linkPage} target={'_blank'}>{text}</a>
            </div>
        </li>
    )
}

export default MenuItem