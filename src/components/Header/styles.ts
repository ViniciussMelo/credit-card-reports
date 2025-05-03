import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #004085 0%, #0056b3 100%);
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.25rem;

  a {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    position: relative;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  a:hover {
    opacity: 0.9;
  }

  .active {
    font-weight: bold;
    text-decoration: underline;
  }
`;