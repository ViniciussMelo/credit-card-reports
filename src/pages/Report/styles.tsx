import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #003366;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Select = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #f7f9fc;
  color: #003366;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: border-color 0.2s, box-shadow 0.2s;
  min-width: 150px;
  height: 42px;

  &:focus {
    border-color: #0077e6;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 119, 230, 0.2);
  }

  @media (max-width: 500px) {
    font-size: 0.95rem;
    width: 100%;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    min-width: 500px;
  }

  th, td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
    white-space: nowrap;
  }

  th {
    background-color: #003366;
    color: white;
  }

  tfoot {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    table {
      font-size: 0.8rem;
    }

    th, td {
      padding: 0.4rem;
    }
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: nowrap;

  ${Select} {
    height: 42px;
    width: auto;
    min-width: 150px;
  }

  button {
    height: 42px;
    white-space: nowrap;
  }
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s;
  height: 42px;

  &:hover {
    background-color: #c0392b;
  }
`;
