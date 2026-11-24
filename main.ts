export function main(): string {
  const drawnOutRoast = "You're the human equivalent of a terms-of-service page: long, dull, and skipped by everyone who ever met you, including your own reflection.";
  if (drawnOutRoast.length < 1 || drawnOutRoast.length > 200) {
    throw new Error("Roast must stay between 1 and 200 characters long.");
  }
  if (drawnOutRoast.trim().length === 0) {
    throw new Error("Roast cannot be empty or only spaces.");
  }
  return drawnOutRoast;
}
