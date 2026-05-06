const formatDate = (iso: Date) => {
  const date = new Date(iso);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${day}/${month}/${year}`;
};

export default formatDate;
