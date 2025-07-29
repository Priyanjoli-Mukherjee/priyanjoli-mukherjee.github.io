export function debounce<Args extends unknown[]>(
  callback: (...args: Args) => void,
  timeout: number,
): (...args: Args) => void {
  let timerId: number;
  return (...args: Args) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => callback(...args), timeout);
  };
}
