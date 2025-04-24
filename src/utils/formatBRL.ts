export interface FormatBRLOptions extends Intl.NumberFormatOptions {}

const DEFAULT_OPTIONS: Intl.NumberFormatOptions = {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export function formatBRL(
  value: number,
  options: FormatBRLOptions = {}
): string {
  const formatter = new Intl.NumberFormat("pt-BR", {
    ...DEFAULT_OPTIONS,
    ...options,
  });
  return formatter.format(value);
}
