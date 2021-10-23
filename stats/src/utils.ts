export const dateStringToDate = (dateStr: string): Date => {
  const dateArr = dateStr.split('/').map((val: string): number => parseInt(val));
  return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
}