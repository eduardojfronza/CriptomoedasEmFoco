import {ContainerLista, Navagacao} from './Navbar.jsx'
import MenuItem from './MenuItem/MenuItem';
import { BiHome, BiGlobe, BiMoney, BiChat, BiQuestionMark } from 'react-icons/bi';
import React, { useState } from 'react';
import Line from '../Line/Line';

function Navbar() {

    return (
        <>
            <Navagacao>
                <ContainerLista>
                    <MenuItem
                        icons={<BiHome />}
                        text='Home'
                        linkPage='https://github.com/eduardojfronza'
                    />

                    <MenuItem
                        icons={<BiGlobe />}
                        text='Criptomoeda'
                        linkPage='https://github.com/eduardojfronza'
                    />

                    <MenuItem
                        icons={<BiMoney />}
                        text='Preço'
                        linkPage='https://github.com/eduardojfronza'
                    />

                    <Line />

                    <MenuItem
                        icons={<BiChat />}
                        text='Chatbot'
                        linkPage='https://github.com/eduardojfronza'
                    />

                    <MenuItem
                        icons={<BiQuestionMark />}
                        text='F.A.Q'
                        linkPage='https://github.com/eduardojfronza'
                    />

                    <Line />
                </ContainerLista>
            </Navagacao>
        </>
    )
}

export default Navbar