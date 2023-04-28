export default function divideFunction(numerator, denominator) {
  if (denominator) {
    return numerator / denominator;
  }
  throw new Error('cannot divide by 0');
}
