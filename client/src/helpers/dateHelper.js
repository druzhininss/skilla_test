export function getDate() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  return [
    today.getFullYear(),
    padTo2Digits(today.getMonth() + 1),
    padTo2Digits(today.getDate()),
  ].join('-');
}
