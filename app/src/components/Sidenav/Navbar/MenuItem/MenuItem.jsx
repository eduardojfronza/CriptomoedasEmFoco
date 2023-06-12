
// li {
//   display: flex;
//   width: 90%;
//   margin-top: 10px;
//   padding: 3px 0px 3px 12px;
// }

// li a {
//   color: #072D4B;
//   text-decoration: none;
//   margin-left: 8px;
// }

// li:hover  {
//   background: rgba(47, 159, 248, 0.1);
//   border-radius: 0px 20px 20px 0px;
// }

// li:hover .textoMenuItem a{
//   color: #2F9FF8;
// }
// li:hover .iconeMenuItem{
//   color: #2F9FF8;
// }

import styled from "styled-components";

export const ListaMenu = styled.li`
  display: flex;
  width: 90%;
  margin-top: 10px;
  padding: 3px 0px 3px 12px;

  &:hover {
    background: rgba(47, 159, 248, 0.1);
    border-radius: 0px 20px 20px 0px;
  }
`

export const TextoMenuItem = styled.div`
>a{    
  color: #072D4B;
  text-decoration: none;
  margin-left: 8px;
  
  ${ListaMenu}:hover & {
    color: #2F9FF8;
  }
}
`

export const IconeMenuItem = styled.div`
  color: #072D4B;

  ${ListaMenu}:hover & {
    color: #2F9FF8;
  } 
`