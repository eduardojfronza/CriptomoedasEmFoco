import {ContainerPrincipal,AreaSidenav,AreaHeader,AreaContent } from '../Home/Home.jsx'
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav'; 
import ContentChat from '../../components/ContentChat/ContentChat.js';

function Chat() {
    return(
        <>
             <ContainerPrincipal>
                <AreaSidenav>
                    <Sidenav />
                </AreaSidenav>

                <AreaHeader>
                    <Header />
                </AreaHeader>

                <AreaContent>
                    <ContentChat />
                </AreaContent>
            </ContainerPrincipal>
        </>
    )
}

export default Chat