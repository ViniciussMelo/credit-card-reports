import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import { Container, Title, Table, Th, Td, Select } from './styles';

import { selectMonth } from '../../reducers/charges/actions';
import { ICharge } from '../../utils/csv';
import { RootState } from '../../store';

export const ReportPage = () => {const dispatch = useDispatch();
  const selectedMonth = useSelector((state: RootState) => state.charges.selectedMonth);
  const chargesData = useSelector((state: RootState) => state.charges.data);
  const availableMonths = Object.keys(chargesData);

  const charges = useMemo(() => {
    return selectedMonth ? chargesData[selectedMonth] || [] : [];
  }, [chargesData, selectedMonth]);

  const handleOnMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('e.target.value: ', e.target.value)
    dispatch(selectMonth(e.target.value))
  }

  return (
    <Container>
      <Title>Relatório de Cobranças</Title>
      {
        availableMonths.length > 0 && (
          <Select 
            value={selectedMonth || ''}
            onChange={handleOnMonthChange}
          >
            <option value="" disabled>Selecione um mês</option>
            {availableMonths.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </Select>
        )
      }

      {charges.length === 0 ? (
        <p>Nenhum dado disponível para o mês selecionado.</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Data</Th>
              <Th>Descrição</Th>
              <Th>Valor</Th>
              <Th>Categoria</Th>
            </tr>
          </thead>
          <tbody>
            {charges.map((charge: ICharge, index) => (
              <tr key={index}>
                <Td>{charge.date}</Td>
                <Td>{charge.title}</Td>
                <Td>R$ {charge.amount.toFixed(2)}</Td>
                <Td>{charge.category || '-'}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};