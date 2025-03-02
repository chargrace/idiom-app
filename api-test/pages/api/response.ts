import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// File path
const filePath = path.join(process.cwd(), "libs", "idioms.json");

interface Idiom {
  id: number;
  idiom: string;
  en_meaning: string;
  zh_meaning: string;
  ja_meaning?: string; // Optional since we will filter it out
}

// Get data from file
const readData = (): Idiom[] => {
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
};

// Write data to file
// const writeData = (data: Idiom[]) => {
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
// };

// Handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = readData();

    if (req.method === "GET") {
      const { query } = req.query; // Get query parameter

      //defaault on server for card limit
//limit in params
//if undefined default


//if query params chinese
//card with chinese at top 
//title, second, third 

//if english
//card with english at top 
//title second third 

      let filteredData = data;

      if (query) {
        const searchQuery = (query as string).toLowerCase();

        // Filter based on idiom, en_meaning, or zh_meaning containing the search term
        filteredData = data.filter(
          (item) =>
            item.idiom.toLowerCase().includes(searchQuery) ||
            item.en_meaning.toLowerCase().includes(searchQuery) ||
            item.zh_meaning.toLowerCase().includes(searchQuery)
        );
      }

    res.status(200).json(filteredData.slice(0, 20)); // Limit set by user with button?

  }
} catch {

  console.error('error');
  res.status(500).json({ error: "Internal Server Error" });
}
}

  //   if (req.method === "GET") {
  //     res.status(200).json(limitedData);
  //   } else if (req.method === "POST") {
  //     const newItem = { id: Date.now(), ...req.body };
  //     data.push(newItem);
  //     writeData(data);
  //     res.status(201).json(newItem);
  //   } else {
  //     res.setHeader("Allow", ["GET", "POST"]);
  //     res.status(405).end(`Method ${req.method} Not Allowed`);
  //   }



  // if (req.method === "GET") {
  //   res.status(200).json(filteredData);
  // } else if (req.method === "POST") {
  //   const newItem = { id: Date.now(), ...req.body };
  //   data.push(newItem);
  //   writeData(data);
  //   res.status(201).json(newItem);
  // } else {
  //   res.setHeader("Allow", ["GET", "POST"]);
  //   res.status(405).end(`Method ${req.method} Not Allowed`);
  // }


//get by id function 

//update function
//delete 