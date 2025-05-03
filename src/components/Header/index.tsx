import { NavLink } from 'react-router-dom';
import { HeaderContainer, Nav, Title } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Title>Credit Card Reports</Title>
      <Nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/import">Importar CSV</NavLink>
        <NavLink to="/report">Relatórios</NavLink>
      </Nav>
    </HeaderContainer>
  )
}