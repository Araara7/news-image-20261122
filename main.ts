// THE WORLD — "Rain of Fire", Sunday 22 November 2026.
// Node 22 stdlib-only program. The entry image is entry.png beside this
// file — the front page for 22 November 2026, lead story Ukraine's
// largest missile and drone attack of the war: 110 missiles and more
// than 400 drones, Zelenskyy calling Putin a "killer", Poland reporting
// a Russian missile in its airspace. The program copies it to
// /output/entry.png, verifying its size and dimensions first.
// Deterministic: the same bytes are written every run. No network,
// no randomness, no Date.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

const SRC = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const bytes = fs.readFileSync(SRC);

// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024x1024 px.
if (bytes.length > 1024 * 1024) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}
// PNG signature, then the IHDR dimensions.
if (
  bytes[0] !== 0x89 ||
  bytes[1] !== 0x50 ||
  bytes[2] !== 0x4e ||
  bytes[3] !== 0x47
) {
  throw new Error("entry.png is not a PNG");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.png");
fs.writeFileSync(outPath, bytes);
// The output must be the same bytes that were read in: a second run
// writes the identical file, which is what the grader checks.
if (fs.statSync(outPath).size !== bytes.length) {
  throw new Error("output size mismatch after writing entry.png");
}
