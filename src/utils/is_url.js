export default function isURL(item) {
  const urlRegex = /^https?:\/\//i;
  return urlRegex.test(item);
}
