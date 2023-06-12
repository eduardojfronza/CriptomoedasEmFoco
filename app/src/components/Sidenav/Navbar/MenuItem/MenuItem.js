import {ListaMenu,IconeMenuItem,TextoMenuItem} from './MenuItem.jsx'

const MenuItem = ({ icons, text, linkPage }) => {
    return (
        <ListaMenu>
            <IconeMenuItem>
                {icons}
            </IconeMenuItem>
            
            <TextoMenuItem>
                <a href={linkPage} target={'_blank'}>{text}</a>
            </TextoMenuItem>
        </ListaMenu>
    )
}

export default MenuItem