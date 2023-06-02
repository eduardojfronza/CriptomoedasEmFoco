import { BiHome } from 'react-icons/bi';
import React, { useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [ativarPage, setAtivarPage] = useState(0); // Estado para controlar a página ativa

    const mudarCorAoMudarDePagina = (index) => {
        setAtivarPage(index);
    };

    return (
        <>
            <nav>
                <ul>
                    <li
                        className={ativarPage === 0 ? 'ativar' : ''}
                        onClick={() => mudarCorAoMudarDePagina(0)}>
                        <BiHome className='iconsMenu' />
                        <a href="page1">Página 1</a>
                    </li>
                    <li
                        className={ativarPage === 1 ? 'ativar' : ''}
                        onClick={() => mudarCorAoMudarDePagina(1)}
                    >
                        <a href="page2">Página 2</a>
                    </li>
                    <li
                        className={ativarPage === 2 ? 'ativar' : ''}
                        onClick={() => mudarCorAoMudarDePagina(2)}
                    >
                        <a href="page3">Página 3</a>
                    </li>

                    <hr></hr>
                </ul>
            </nav>
        </>
    )
}

export default Navbar