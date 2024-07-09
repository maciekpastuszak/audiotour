import fs from 'fs';

export const getServerSideProps = async (context) => {

    const { path } = context.params;
    const filePath = path.join(process.cwd(), 'public', `${path.join('/')}.html`);
    try {
        const htmlContent = fs.readFileSync(filePath)
    } catch (error) {
        return {
            notFound: true,
        };
    }
}