import styled from "styled-components";

export const ContainerPrincipal = styled.section`
    display: grid;
    grid-template-columns: 200px 1fr; /* Duas colunas, a primeira com 200px de largura e a segunda ocupa o restante do espaço */
    grid-template-rows: 10vh 1fr;  /* Duas linhas, a primeira com 10% da altura da viewport e a segunda ocupa o restante do espaço */
    height: 100vh; /* Altura total da janela do navegador */
`
  
export const AreaSidenav = styled.section`
    grid-column: 1; /* Sidenav ocupa a primeira coluna */
    grid-row: span 2; /* Sidenav ocupa duas linhas */
    background-color: #F4F9F8;
`
export const AreaHeader = styled.section`
    grid-column: 2; /* Header ocupa a segunda coluna */
    grid-row: 1; /* Header ocupa a primeira linha */
    background-color: white;
`
  
export const AreaContent = styled.section`
    grid-column: 2; /* Content ocupa a segunda coluna */
    grid-row: 2; /* Content ocupa a segunda linha */
   background-color: white;
`
  