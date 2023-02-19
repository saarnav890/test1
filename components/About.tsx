import { BsArrowDown } from "react-icons/bs";


interface i{
    firstParagraph: string
    secondParagraph: string
}

export default function About({firstParagraph}:i) {
    return (
        <div className="flex leading-10 text-xl w-full text-white justify-between">
            <div className="w-2/5 flex-col mx-12 mt-16  ">
                <div className="">
                    {firstParagraph}
                </div>
            </div>
            <div className="text-[12rem] animate-bounce-top text-white w-2/5 text-center mt-14 flex justify-center">
                <BsArrowDown></BsArrowDown>
            </div>

        </div>
    )
}