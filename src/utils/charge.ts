import { ICharge } from './csv';

export const getAmountByCategory = (charges: ICharge[]): { formattedValues: Array<{ name: string, value: number }>, total: number } => {
  const map = new Map<string, number>();
      
  charges.forEach((c) => {
    const current = map.get(c.category) || 0;
    map.set(c.category, current + c.amount);
  });
  
  const formattedValues = Array.from(map.entries())
  .map(([name, value]) => ({ name, value: parseFloat(value.toFixed(2)) }))
  .filter((entry) => entry.value > 0)

  return {
    formattedValues,
    total: formattedValues.reduce((sum, item) => sum + item.value, 0)
  };
}