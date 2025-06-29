import Button from "./Button";

export default function ProjectsSidebar({onAddProject ,projects , onSelectProject , selectedProjectId}){
    return(<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl" >
        <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h1>
        <div>
            <Button onClick ={onAddProject}>+ Add Project</Button>
           <ul  className="mt-8">
                {projects.map((project) => {
                    let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                    if(project.id === selectedProjectId){
                        cssClass += " text-stone-200 bg-stone-800" 
                    }else{
                        cssClass += " text-stone-400"
                    }
                return(
                <li key={project.id}>
                    <button className={cssClass}
                        onClick={() => onSelectProject(project.id)}
                    >{project.title}</button>
                </li>
                )}
                )}
            </ul>
        </div>
    </aside>

    )
}