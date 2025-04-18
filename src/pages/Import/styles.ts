import styled from 'styled-components';

export const ImportContainer = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ImportTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

export const ImportDescription = styled.p`
  margin-bottom: 2rem;
  color: #555;
`;

export const ImportUploadLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #00336d;
  }
`;

export const ImportHiddenInput = styled.input`
  display: none;
`;
