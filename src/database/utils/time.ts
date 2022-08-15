export const now = () => {
  const d = new Date();
  d.setHours(d.getHours() - 3);
  return d.toUTCString();
};