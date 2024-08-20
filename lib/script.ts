import { PrismaClient } from '@prisma/client'
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
const prisma = new PrismaClient();

try {
    const porfolioItems = await prisma.portfolio.findMany({
        where: {display_on_map: 1 },
        select: {
            real_latitude: true,
            real_longitude: true,
            name: true,
            link: true,
        }
    });

    const markers = porfolioItems.map((item) => ({
        lat: item.real_latitude?.toNumber() || 0,
        lng: item.real_longitude?.toNumber() || 0,
        name: item.name || 'Unknown',
        link: item.link || '#',
    }));

    return {
        props: {
            markers,
        },
    };
} catch (error) {
    console.error('Error fetching markers: ', error);

    return {
        props: {
            markers: [],
        },
    };
} finally {
    await prisma.$disconnect();
}
}

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