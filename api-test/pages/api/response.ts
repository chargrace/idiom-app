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

//file path
const filePath = path.join(process.cwd(), "libs", "idioms.json");


//get data from file
const readData = () => {
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
};


//write data to file
const writeData = (data: any) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};


//messy does-everything function- clean up?
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = readData();
  const limitedData = data.slice(0, 5);

  if (req.method === "GET") {
    res.status(200).json(limitedData);
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

//get by id function 

//update function

//delete function