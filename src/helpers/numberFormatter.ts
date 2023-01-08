export function numberFormatter(num: number): string {
  const nf = new Intl.NumberFormat();
  const result = nf.format(num);
  return `${result}`;
}
