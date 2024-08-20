// // pages/api/portfolios.ts
// import prisma from '@/lib/script';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const portfolios = await prisma.portfolio.findMany({
//       where: { display_on_map: 0 },
//     });
//     res.status(200).json(portfolios);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching portfolios" });
//   }
// }