
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import data from '../data.json';
import CardsArea from '@/components/CardsArea'





export default function Home() {
  return (
    <>
    <Navbar initials={data.firstName[0] + data.lastName[0]}/>  
    <Main firstName={data.firstName}
    lastName={data.lastName}
    email={data.email}
     jobDescription={data.jobDescription}
     twitterLink={data.twitterUrl}
     gitHubLink={data.githubUrl}
     instagramLink={data.instagramUrl}
     />
    <About firstParagraph={data.aboutText} secondParagraph=''/>
     <CardsArea projects={data.projects}/>


    </>
    
  )
}
