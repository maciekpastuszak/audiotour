// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import type { FooterLink } from '@/sanity/lib/interfaces';

// async function fetchFooterItems(language: string) {

//     const query = `
//     *[_type == 'footerLink'] {
//         "title": title[_key == "${language}"][0].value,
//         iconName,
//         isTitle,
//         isSiteMapEntry,
//         url,
//         priority,
//         isURLExternal
//       } | order(priority asc)
//       `;

//     const footerItems: FooterLink[] = await client.fetch(query);
//     return footerItems;
// }

// export default async function Footer(props: { locale: string }) {
//     const footerItems = await fetchFooterItems(props.locale);

//     return (
//         <section className="bg-black">
//             <div className="2xl:container 2xl:mx-auto text-white bg-zinc-900">
//                 <div className="grid grid-cols-1 md:grid-cols-7 gap-8 py-8 px-8">
//                     <div className="col-span-2">
//                         {
//                             footerItems.filter((item) => { return item.isSiteMapEntry == false }).map((footerLink, idx) => {
//                                 if (footerLink.isTitle) {
//                                     return <h3 key={idx} className="text-2xl font-extrabold pb-2">{footerLink.title}</h3>
//                                 }
//                                 else if (footerLink.isURLExternal) {
//                                     return <Link key={idx} className="mt-4 block bg-zinc-800 rounded-3xl hover:bg-zinc-700 transition duration-300 ease-in-out" href={footerLink.url ?? "#"} target="_blank">
//                                         <div className="py-2 px-4 flex items-center flex-row gap-x-2">
//                                             <div className="footer-icon relative top-[2px]">
//                                                 <span className="material-symbols-rounded text-xl">{footerLink.iconName}</span>
//                                             </div>
//                                             <div className="grow text-zinc-400 relative bottom-px">{footerLink.title}</div>
//                                             <div className="footer-icon text-zinc-500 relative top-[2px]">
//                                                 <span className="material-symbols-rounded text-xl">open_in_new</span>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 }
//                                 else {
//                                     return <Link key={idx} className="mt-4 block bg-zinc-800 rounded-3xl hover:bg-zinc-700 transition duration-300 ease-in-out" href={footerLink.url ?? "#"}>
//                                         <div className="py-2 px-4 flex items-center flex-row gap-x-2">
//                                             <div className="footer-icon relative top-[2px]">
//                                                 <span className="material-symbols-rounded text-xl">{footerLink.iconName}</span>
//                                             </div>
//                                             <div className="grow text-zinc-400 relative bottom-px">{footerLink.title}</div>
//                                         </div>
//                                     </Link>
//                                 }
//                             })
//                         }
//                     </div>
//                     <div className="col-span-3 rounded-3xl bg-transparent">
//                         <div id="map" className="w-full h-full rounded-3xl bg-black"></div>
//                     </div>
//                     <div className="col-span-2">
//                         {
//                             footerItems.filter((item) => { return item.isSiteMapEntry == true }).map((footerLink, idx) => {
//                                 if (footerLink.isTitle) {
//                                     return <h4 key={idx} className="text-xs uppercase opacity-35 py-4">{footerLink.title}</h4>
//                                 }
//                                 else {
//                                     return <Link key={idx} className="block text-2xl font-extrabold py-1" href={footerLink.url ?? "#"}>
//                                         {footerLink.title}
//                                     </Link>
//                                 }
//                             })
//                         }
//                     </div>
//                 </div>
//             <div className="w-full text-center text-xs text-zinc-500 pb-8">© Audiotour 2024</div>
//             </div>
//         </section>
//     );
// }