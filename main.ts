// The World Today — 26 November 2026: a newspaper front page summing up the
// day's world news. The program copies the image shipped beside it to the
// grader's output directory, resolving the asset relative to this script.
import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
