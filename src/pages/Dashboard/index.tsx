// src/pages/Dashboard/index.tsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import React, { useMemo } from 'react';

import { Container, Title, Select } from './styles';

import { selectMonth } from '../../reducers/charges/actions';
import { stringToColor } from '../../utils/color';
import { RootState } from '../../store';

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
    const map = new Map<string, number>();
    charges.forEach((c) => {
      const current = map.get(c.category) || 0;
      map.set(c.category, current + c.amount);
    });
  
    return Array.from(map.entries())
      .map(([name, value]) => ({ name, value: parseFloat(value.toFixed(2)) }))
      .filter((entry) => entry.value > 0);
  }, [charges]);


  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectMonth(e.target.value));
  };

  return (
    <Container>
      <Title>Resumo de Gastos por Categoria</Title>

      {availableMonths.length > 0 && (
        <Select value={selectedMonth || ''} onChange={handleMonthChange}>
          <option value="">Todos os meses</option>
          {availableMonths.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </Select>
      )}

      {amountByCategory.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={amountByCategory}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {amountByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={stringToColor(entry.name)} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </Container>
  );
};
