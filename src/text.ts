export function slugify(text: string): string {
  return text.toLowerCase().trim().replace(/ /, "-");
}

export function reverse(text: string): string {
  return [...text].reverse().join("");
}

export function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max)}...` : text;
}
