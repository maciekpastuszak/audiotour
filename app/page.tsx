import { notFound } from "next/navigation"
import { promises as fs} from 'fs';
import path from "path";


const HomePage = async () => {

    const filePath = path.join(process.cwd(), 'public', 'index.html');
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        return <div dangerouslySetInnerHTML={{ __html: fileContent }}/>
    } catch (error) {
        return notFound
    }

}

export default HomePage;