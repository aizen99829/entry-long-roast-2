export function main(): string {
  const line = "You're the human equivalent of a terms-of-service page: long, dull, and skipped by everyone who ever met you, including your own reflection.";
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  return line;
}
