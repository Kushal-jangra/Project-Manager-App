import { useState } from "react";
import NewProjects from "./components/New-Projects.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [selectedProject , setSelectedProject] = useState({
      selectedProjectId : undefined,
      projects : [],
      tasks : [],
    })
    function handleAddTask(text){
      setSelectedProject(prevProject => {
          const taskId = Math.random();
          const NewTask = {
            text : text,
            ProjectId : prevProject.selectedProjectId,
            id : taskId,
          }
          return{
            ...prevProject,
            tasks : [NewTask,...prevProject.tasks ]
          }
        })
    }
    function handleDeleteTask(id){
        setSelectedProject(prevProject =>{
        return{ ...prevProject,
        tasks : prevProject.tasks.filter(task => task.id !== id)
      };
      })
    }

    function handleStartAddProject(){
      setSelectedProject(prevProject =>{
        return{ ...prevProject,
        selectedProjectId : null,
      };
      })
    }
    function handleSelectedProject(id){
      setSelectedProject(prevProject =>{
        return{ ...prevProject,
        selectedProjectId : id,
      };
      })
    }

    function handleAddProject(projectData){
        setSelectedProject(prevProject => {
          const Id = Math.random();
          const newProject = {
            ...projectData,
            id : Id,
          }
          return{
            ...prevProject,
            selectedProjectId : undefined,
            projects : [...prevProject.projects , newProject]
          }
        })
    }
    function handleCancelAddProject(){
      setSelectedProject(prevProject =>{
        return{ ...prevProject,
        selectedProjectId : undefined
      };
      })
    }
    function handleDeletedProjects(){
      setSelectedProject(prevProject =>{
        return{ ...prevProject,
        selectedProjectId : undefined,
        projects : prevProject.projects.filter(project => project.id !== prevProject.selectedProjectId)
      };
      })
    }


    console.log(selectedProject);
    const clickedProject = selectedProject.projects.find(project => project.id === selectedProject.selectedProjectId);

    let content = <SelectedProject project={clickedProject} onDelete = {handleDeletedProjects} onAddTask = {handleAddTask} onDeleteTask = {handleDeleteTask} tasks ={selectedProject.tasks}/>;
    if(selectedProject.selectedProjectId === null){
      content = <NewProjects onAdd = {handleAddProject} onCancel = {handleCancelAddProject}/>
    }else if(selectedProject.selectedProjectId === undefined){
      content = <NoProjectSelected onAddProject ={handleStartAddProject}/>
    }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject = {handleStartAddProject} projects = {selectedProject.projects} onSelectProject = {handleSelectedProject} selectedProjectId={selectedProject.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
