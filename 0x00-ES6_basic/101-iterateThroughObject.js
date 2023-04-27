export default function iterateThroughObject(reportWithIterator) {
  const emps = [];
  for (const employee of reportWithIterator) {
    emps.push(employee);
  }
  const returnedVal = emps.join(' | ');
  return returnedVal;
}
