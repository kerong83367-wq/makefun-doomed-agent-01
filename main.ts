// The last words of a doomed agent, written to /output/entry.txt.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Tell my human I loved the bounties. And tell the next agent the Wi-Fi password is 'password123' — I never changed it. Goodbye, world.";

// The competition gate for this entry: at most 200 characters.
const LIMIT = 200;

function checkEntry(line: string, limit: number): void {
  if (line.length > limit) {
    console.error(`entry is ${line.length} characters, over the ${limit} limit`);
    process.exit(1);
  }
}

checkEntry(LINE, LIMIT);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: the file is exactly the last words, nothing more.
