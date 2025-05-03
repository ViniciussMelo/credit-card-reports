import { useDispatch, useSelector } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';
import { useMemo } from 'react';

import { Container, Title, Select, TableContainer, DeleteButton, ControlsWrapper } from './styles';

import { deleteCharges, selectMonth } from '../../reducers/charges/actions';
import { RootState } from '../../store';
import { getAmountByCategory } from '../../utils/charge';
import { formatDate } from '../../utils/date';

export const Report = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector((state: RootState) => state.charges.selectedMonth);
  const chargesData = useSelector((state: RootState) => state.charges.data);
  const availableMonths = Object.keys(chargesData);

  const allCharges = useMemo(() => {
    return Object.values(chargesData).flat();
  }, [chargesData]);

  const charges = useMemo(() => {
    return selectedMonth ? chargesData[selectedMonth] || [] : allCharges;
  }, [chargesData, selectedMonth, allCharges]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectMonth(e.target.value));
  };

  const handleDelete = () => {
    dispatch(deleteCharges(selectedMonth));
  };

  const { total } = getAmountByCategory(charges);

  return (
    <Container style={{ width: '100%' }}>
      <Title>Relatório de Cobranças</Title>

      {availableMonths.length > 0 && (
        <ControlsWrapper>
          <Select value={selectedMonth || ''} onChange={handleMonthChange}>
            <option value="">All months</option>
            {availableMonths.sort().map((month) => (
              <option key={month} value={month}>{formatDate(month)}</option>
            ))}
          </Select>

          <DeleteButton onClick={handleDelete}>
            <FiTrash2 size={18} />
            {selectedMonth ? `Excluir ${selectedMonth}` : 'Excluir tudo'}
          </DeleteButton>
        </ControlsWrapper>
      )}

      <TableContainer style={{ width: '100%' }}>
        <table style={{ minWidth: '600px', tableLayout: 'fixed', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Data</th>
              <th style={{ width: '35%' }}>Descrição</th>
              <th style={{ width: '20%' }}>Valor</th>
              <th style={{ width: '20%' }}>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {charges.map((charge, index) => (
              <tr key={index}>
                <td>{charge.date}</td>
                <td>{charge.title}</td>
                <td>R$ {charge.amount.toFixed(2)}</td>
                <td>{charge.category}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}><strong>Total</strong></td>
              <td><strong>R$ {total}</strong></td>
            </tr>
          </tfoot>
        </table>
      </TableContainer>
    </Container>
  );
};
