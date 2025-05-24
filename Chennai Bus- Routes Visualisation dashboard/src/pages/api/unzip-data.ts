import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import AdmZip from 'adm-zip';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const zipPath = path.join(process.cwd(), 'route_data_cumta.zip');
  const extractTo = path.join(process.cwd(), 'public', 'data');
  const expectedCsv = path.join(extractTo, 'routes.csv');
  const originalCsv = path.join(extractTo, '18Mar_CUMTA 17-02-25 6.00 P.M - Cumta_tracking_data_version1.csv');

  // Always unzip and rename to ensure fresh data
  try {
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(extractTo, true);
    // Rename the extracted file to routes.csv
    if (fs.existsSync(originalCsv)) {
      if (fs.existsSync(expectedCsv)) {
        fs.unlinkSync(expectedCsv); // Remove old routes.csv if exists
      }
      fs.renameSync(originalCsv, expectedCsv);
    }
    return res.status(200).json({ message: 'Data unzipped and renamed successfully.' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to unzip or rename data', details: err });
  }
} 