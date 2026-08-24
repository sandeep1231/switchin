// Injects GEMINI_API_KEY from the environment into the Angular environment
// files at build time, so the real key never has to be committed to git.
// Locally, without the env var set, the checked-in placeholder is left as-is
// and the chat widget falls back to its "assistant is being set up" message.
const fs = require('fs');
const path = require('path');

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.log('[set-env] GEMINI_API_KEY not set; leaving environment files unchanged.');
  process.exit(0);
}

const files = [
  { path: path.join(__dirname, '../src/environments/environment.ts'), production: false },
  { path: path.join(__dirname, '../src/environments/environment.prod.ts'), production: true },
];

for (const { path: filePath, production } of files) {
  const content = `export const environment = {\n  production: ${production},\n  geminiApiKey: '${apiKey}'\n};\n`;
  fs.writeFileSync(filePath, content);
  console.log(`[set-env] wrote ${path.basename(filePath)}`);
}
