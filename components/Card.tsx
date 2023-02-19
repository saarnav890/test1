interface i{
    title: string
    description: string
    url: string
    stars: number,
    language: string
}

import Link from "next/link"


export default function Card({title, description, url, stars, language}: i) {



    return (
        <Link href={url}>
     <div className="bg-white rounded-xl h-[24rem] w-96 flex flex-col hover:scale-105 active:scale-90 duration-200 pb-8"
     >
        
        <div className="underline flex justify-center text-gray-900 text-4xl font-bold mt-12 ">
            {title}
        </div>
        <div className="flex justify-self-end mt-48  self-center p-4">
            <div>{description}</div>
            <div className="ml-10 font-extrabold">{stars} Stars</div>
        </div>
        <div className=" flex items-center justify-center mt-2">
            {language}
        </div>
       
        
        
     </div>
     </Link>
    )
}