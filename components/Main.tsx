
import { SocialIcon } from 'react-social-icons';


interface i{
    firstName: string
    lastName: string
    jobDescription: string
    gitHubLink?: string
    twitterLink?: string
    instagramLink?: string
    email: string

}



export default function Main({ instagramLink ,lastName, firstName, jobDescription, gitHubLink, twitterLink, email}:i) {
    return (
        <div className="flex px-16 w-full mt-32  justify-between">
            <div className="text-[158px] leading-[12rem] text-white ">
                {firstName}
                <br></br>
                {lastName}
            </div>

            <div className="text-5xl text-white  w-1/3 mt-12 flex flex-col">
                <div>
                {jobDescription}
                </div>
                <div className='flex gap-8 justify-start mt-8'>
                    { twitterLink && <div>
                        <SocialIcon className='hover:scale-110 active:scale-90 duration-200' network='twitter' url={twitterLink} bgColor='white'/>
                    </div>}
                    { gitHubLink && <div>
                        <SocialIcon className="hover:scale-110 active:scale-90 duration-200" network='github' url={gitHubLink} bgColor='white'/>
                    </div>}
                    { instagramLink && <div>
                        <SocialIcon className="hover:scale-110 active:scale-90 duration-200" network='github' url={instagramLink} bgColor='white'/>
                    </div>}
                    <div>
                        <SocialIcon className="hover:scale-110 active:scale-90 duration-200" network='email' url={`mailto:${email}`} bgColor='white'/>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}