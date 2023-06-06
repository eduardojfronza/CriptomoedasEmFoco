import MenuItem from './MenuItem/MenuItem';
import { BiHome, BiGlobe, BiMoney} from 'react-icons/bi';
import React, { useState } from 'react';
import './Navbar.css'
import Line from '../Line/Line';

function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <MenuItem
                        icons={<BiHome />}
                        text='Home'
                        linkPage = 'https://github.com/eduardojfronza'
                    />

                    <MenuItem
                        icons={<BiGlobe />}
                        text='Criptomoeda'
                        linkPage = 'https://github.com/eduardojfronza'
                    />
                    
                    <MenuItem
                        icons={<BiMoney />}
                        text='Preço'
                        linkPage = 'https://github.com/eduardojfronza'
                    />

                    <Line />
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar