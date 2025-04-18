export interface ICharge {
  data: string;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const entry = {} as any;

    headers.forEach((header, index) => {
      entry[header] = values[index];
    });

    return {
      data: entry.data,
      title: entry.title,
      amount: parseFloat(entry.amount.replace('R$', '').replace(',', '.')),
      category: entry.category || undefined
    };
  })
}