export interface ICharge {
  date: string;
  title: string;
  amount: number;
  category: string;
}

export function parseCSV(content: string): ICharge[] {
  const lines = content.trim().split('\n');
  const [headerLine, ...rows] = lines;

  const headers = headerLine.split(',').map(h => h.trim().toLowerCase());

  return rows.map(row => {
    const values = row.split(',').map(value => value.trim());
    const entry = {} as any;

    headers.forEach((header, index) => {
      entry[header] = values[index];
    });

    return {
      date: entry.date,
      title: entry.title,
      amount: parseFloat(entry.amount.replace('R$', '').replace(',', '.')),
      category: entry.category || undefined
    };
  })
}