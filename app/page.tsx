import Image from "next/image";
import { Router } from "next/router";
import { useEffect } from "react";


const Aplikacja = ({ content }: any) => {
	return (
		<div dangerouslySetInnerHTML={{__html: content}} />
	)
}

export async function getInitialProps() {
	const res = await fetch('https://audiotour.pl/aplikacja');
	const content = await res.text();

	return {
		props: {
			content,
		}
	}
}

export default Aplikacja;
