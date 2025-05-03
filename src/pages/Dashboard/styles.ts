import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
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
  margin-bottom: 1rem;

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


export const ChartWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;

  @media (max-width: 500px) {
    min-height: 280px;
  }

  .recharts-wrapper {
    width: 100% !important;
    max-width: 100% !important;
  }

  .recharts-legend-wrapper {
    max-width: 100%;
    overflow-x: auto;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 1rem;
  }
`;

export const Totalizer = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #003366;
  background-color: #eef6fd;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  margin-bottom: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.75rem 1rem;
    flex-direction: row;
  }
`;

