import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "The demo crashed in front of two hundred people, so my agent fixed it in seconds — by deleting the demo and blaming the Wi-Fi.\n";

if (!JOKE.trim()) {
  console.error("error: joke text is empty");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
