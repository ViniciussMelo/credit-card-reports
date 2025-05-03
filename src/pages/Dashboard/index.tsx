import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { FaMoneyBillWave } from 'react-icons/fa';
import React, { useMemo } from 'react';

import { Container, Title, Select, ChartWrapper, Totalizer } from './styles';

import { selectMonth } from '../../reducers/charges/actions';
import { stringToColor } from '../../utils/color';
import { RootState } from '../../store';
import { getAmountByCategory } from '../../utils/charge';
import { formatDate } from '../../utils/date';

export const Dashboard = () => {
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

  const amountByCategory = useMemo(() => {
    const { formattedValues } = getAmountByCategory(charges);
  
    return formattedValues;
  }, [charges]);

  const total = amountByCategory.reduce((sum, item) => sum + item.value, 0);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectMonth(e.target.value));
  };
  
  return (
    <Container>
      <Title>Resumo de Gastos por Categoria</Title>

      {availableMonths.length > 0 && (
        <Select value={selectedMonth || ''} onChange={handleMonthChange}>
          <option value="">All months</option>
          {availableMonths.sort().map((month) => (
            <option key={month} value={month}>{formatDate(month)}</option>
          ))}
        </Select>
      )}

      {amountByCategory.length > 0 && (
        <ChartWrapper>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={amountByCategory}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="75%"
                label={(entry) => `R$ ${entry.value.toFixed(2)}`}
              >
                {amountByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={stringToColor(entry.name)} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <Totalizer>
            <FaMoneyBillWave size={18} />
            {' '}Total: R$ {total.toFixed(2)}
          </Totalizer>
        </ChartWrapper>
      )}
    </Container>
  );
};
