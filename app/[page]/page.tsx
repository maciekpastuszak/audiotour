import { promises as fs } from 'fs';
import { notFound } from "next/navigation"
import path from 'path';

interface Props {
	params: {
		page: string;
	};
}

const Page = async ({ params }: Props) => {
	const { page } = params;
	
	const filePath = path.join(process.cwd(), 'public', page, 'index.html')	
	try {

		const fileContent = await fs.readFile(filePath, 'utf8');
		return <div dangerouslySetInnerHTML={{ __html: fileContent }}/>;

	} catch (error) {
		notFound();
	}

}

export default Page