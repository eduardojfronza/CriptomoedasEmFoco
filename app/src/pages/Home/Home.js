import {ContainerPrincipal,AreaSidenav,AreaHeader,AreaContent } from './Home.jsx'
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import Content from '../../components/ContentHome/ContentHome.js';   

function Home() {
    return (
        <>
            <ContainerPrincipal>
                <AreaSidenav>
                    <Sidenav />
                </AreaSidenav>

                <AreaHeader>
                    <Header />
                </AreaHeader>

                <AreaContent>
                    <Content />
                </AreaContent>
            </ContainerPrincipal>
        </>
    )
}

export default Home