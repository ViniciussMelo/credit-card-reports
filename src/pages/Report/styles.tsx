// src/pages/Report/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 4rem auto;
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem;
`;

export const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
`;

export const Select = styled.select`
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;