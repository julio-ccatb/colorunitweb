export const formatDate = (date: Date, opt?: Intl.DateTimeFormatOptions) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(date).toLocaleString(undefined, !opt ? options : opt);
};

export const isValidDate = (d: unknown) => {
  return d instanceof Date && !isNaN(d as unknown as number);
};
