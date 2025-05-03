import { Link } from 'react-router-dom';
import { HeaderContainer, Nav, Title } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Title>Credit Card Reports</Title>
      <Nav>
        <Link to="/">Inicio</Link>
        <Link to="/import">Importar CSV</Link>
        <Link to="/report">Relatórios</Link>
      </Nav>
    </HeaderContainer>
  )
}