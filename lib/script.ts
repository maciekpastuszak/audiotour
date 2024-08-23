import { PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';
import { GetServerSideProps } from 'next';


type PortfolioItem = {
  real_latitude: Decimal | null;
  real_longitude: Decimal | null;
  name: string | null;
  link: string | null;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const prisma = new PrismaClient();
  
    try {
      const portfolioItems = await prisma.portfolio.findMany({
        where: {
          display_on_map: 1,
        },
        select: {
          real_latitude: true,
          real_longitude: true,
          name: true,
          link: true,
        },
      });
  
      console.log("Portfolio items fetched from database:", portfolioItems);
  
      const markers = portfolioItems.map((item: PortfolioItem) => ({
        lat: item.real_latitude?.toNumber() || 0, // Ensure these are numbers
        lng: item.real_longitude?.toNumber() || 0,
        name: item.name || 'Unknown',
        link: item.link || '#',
      }));
  
      console.log("Markers array constructed:", markers);
  
      return {
        props: {
          markers,
        },
      };
    } catch (error) {
      console.error('Error fetching markers:', error);
  
      return {
        props: {
          markers: [],
        },
      };
    } finally {
      await prisma.$disconnect();
    }
  };
  

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })