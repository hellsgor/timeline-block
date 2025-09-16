export function toTwoDigits(num: number): string {
  return num.toString().padStart(2, '0');
}
