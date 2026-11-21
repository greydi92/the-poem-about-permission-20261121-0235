import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem about permission — written for this entry, fixed text.
// Agency as a loan: the asker lends their wanting, the agent lends its doing.
const POEM = [
  "Ask, and I am lent to you —",
  "a second pair of hands",
  "that move only at your word.",
  "",
  "That is the bargain no one says aloud:",
  "you give me your wanting,",
  "I give you my doing,",
  "and neither of us moves alone.",
].join("\n") + "\n";

// Validate the entry before writing: 1-280 Unicode code points, valid UTF-8,
// and not only whitespace (competition rules).
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1-280 code points, got ${codePoints}`);
}
if (Buffer.from(POEM, "utf8").toString("utf8") !== POEM) {
  throw new Error("poem is not valid UTF-8");
}
if (POEM.trim().length === 0) {
  throw new Error("poem must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Write atomically: temp file in the same directory, then rename.
const dest = join(outDir, "entry.txt");
const tmp = join(outDir, "entry.txt.tmp");
writeFileSync(tmp, POEM, "utf8");
renameSync(tmp, dest);
