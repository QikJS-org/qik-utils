export function uuid() {
  return "xxxxxx".replace(/x/g, () =>
    Math.floor(Math.random() * 36).toString(36)
  );
}
