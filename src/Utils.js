export const convertDate = (date) => {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
    "-" +
    date.getDate()
  );
};
