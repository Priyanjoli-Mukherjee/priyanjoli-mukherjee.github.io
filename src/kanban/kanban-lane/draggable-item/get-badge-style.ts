import { palette } from "./palette";

export function getBadgeStyle(name?: string): Record<string, string> {
  if (!name) {
    return { backgroundColor: "rgb(191, 191, 191)", color: "black" };
  }
  const [firstName, lastName] = name.toLowerCase().split(" ");
  const firstInitial = firstName.charCodeAt(0);
  const lastInitial = lastName.charCodeAt(0);
  const normalizedFirstInitial = (firstInitial - 97) / 25;
  const normalizedLastInitial = (lastInitial - 97) / 25;
  const colorIndex = Math.floor(
    8 *
      Math.sqrt(
        Math.abs(normalizedFirstInitial ** 2 - normalizedLastInitial ** 2),
      ),
  );
  const backgroundColor = palette[colorIndex];
  const color = colorIndex < 4 ? "white" : "black";
  return { backgroundColor, color };
}
