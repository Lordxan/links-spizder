import fs from 'fs';
import path from 'path';
import { normalizePath } from 'vite';
import { version } from '../package.json';

const FILE_REGEX = /manifest.json$/

export default function manifestTransformPlugin() {
  return {
    name: 'manifest-transform',
    load(filePath) {
      if (FILE_REGEX.test(filePath)) {
        filePath = path.resolve(normalizePath(filePath));
        const file = fs.readFileSync(filePath, { encoding: "utf8" });
        const manifest = JSON.parse(file)
        delete manifest.$schema
        manifest.version = version
        manifest.description += ` ${version}`
        this.emitFile({
          type: "asset",
          fileName: 'manifest.json',
          source: JSON.stringify(manifest),
        });
      }
    }
  }
}
