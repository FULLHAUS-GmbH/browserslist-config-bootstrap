#!/usr/bin/env node
// scripts/build.cjs

const { readFile, writeFile } = require('fs/promises');
const { resolve } = require('path');

// Define paths
const INPUT_FILE = resolve(__dirname, '../.browserslistrc');
const OUTPUT_FILE = resolve(__dirname, '../index.cjs');

(async () => {
  try {
    // Read and process .browserslistrc
    const raw = await readFile(INPUT_FILE, 'utf8');
    const entries = raw
      .split(/\r?\n/)
      .map((line) => line.replace(/\s*#.*$/, '').trim()) // Strip comments & trim
      .filter(Boolean); // Remove empty lines

    // Generate CommonJS module
    const output = `// Autogenerated from .browserslistrc
module.exports = ${JSON.stringify(entries, null, 2)};
`;

    // Write to index.cjs
    await writeFile(OUTPUT_FILE, output, 'utf8');
    console.log(`✅ Generated ${OUTPUT_FILE} with ${entries.length} entries.`);
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
})();
