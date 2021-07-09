export function convert(num, base = 2) {
  let quotient,
    reminder = [];
  while (quotient !== 0) {
    reminder.push(
      quotient ? Math.floor(quotient % base) : Math.floor(Number(num) % base)
    );

    quotient = quotient
      ? Math.floor(quotient / base)
      : Math.floor(Number(num) / base);
    // console.log("quo", quotient);
  }
  return { reminder };
}
