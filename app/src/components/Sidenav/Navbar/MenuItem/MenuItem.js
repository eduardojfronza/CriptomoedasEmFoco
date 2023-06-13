import {ListaMenu,IconeMenuItem,TextoMenuItem} from './MenuItem.jsx'
import { Link } from 'react-router-dom';

const MenuItem = ({ icons, text, linkPage }) => {
    return (
        <ListaMenu>
            <IconeMenuItem>
                {icons}
            </IconeMenuItem>
            
            <TextoMenuItem>
                <Link to={linkPage}>{text}</Link>
            </TextoMenuItem>
        </ListaMenu>
    )
}

export default MenuItem