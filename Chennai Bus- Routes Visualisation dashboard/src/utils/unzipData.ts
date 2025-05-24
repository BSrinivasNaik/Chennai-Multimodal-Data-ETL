import AdmZip from 'adm-zip';
import path from 'path';

export function unzipRouteData(zipPath: string, extractTo: string) {
  const zip = new AdmZip(zipPath);
  zip.extractAllTo(extractTo, true);
  console.log(`Extracted ${zipPath} to ${extractTo}`);
} 