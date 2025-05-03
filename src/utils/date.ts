export const getMonthFromDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${date.getFullYear()}-${month}`;
};

export const formatDate = (input: string): string => {
  const [year, month] = input.split('-');
  const date = new Date(+year, +month - 1);

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long'
  }).format(date);
}