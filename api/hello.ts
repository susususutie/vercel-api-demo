import { VercelRequest, VercelResponse } from "@vercel/node";

export function GET(request: Request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}, ${Date.now()}`);
}

export const config = {
  // runtime: 'nodejs',
};

// export default async (req: VercelRequest, res: VercelResponse) => {
//   const data = {
//     msg: "hello world!",
//     time: Date.now(),
//   };
//   res.status(200).json(data);
// };
