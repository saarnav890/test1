import Card from "./Card"

interface i{
    projects: {
        title: string,
        description: string,
        url: string,
        stars: number,
        language: string
    }[]
}

export default function CardsArea({projects}:i) {
    return (
        <div className="flex  justify-between w-full px-20 gap-10 flex-wrap mt-16 py-10">
            {projects.map( (project, index) => {
                return (
                <Card key={index} title={project.title} description={project.description} stars={project.stars} language={project.language} url={project.url}/>
                )
            })}
        </div>
    )
}