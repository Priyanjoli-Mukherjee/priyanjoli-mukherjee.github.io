export function getInitials(name: string): string {
  const names = name.split(" ");
  const firstInitial = names[0][0];
  const lastInitial = names[names.length - 1][0];
  return `${firstInitial} ${lastInitial}`;
}
