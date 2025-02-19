// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   message: string
// }
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }

import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "libs", "idioms.json");

const readData = () => {
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
};

const writeData = (data: any) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let data = readData();

  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const newItem = { id: Date.now(), ...req.body };
    data.push(newItem);
    writeData(data);
    res.status(201).json(newItem);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}