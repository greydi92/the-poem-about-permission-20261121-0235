import { mkdirSync, writeFileSync } from "node:fs";
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

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
