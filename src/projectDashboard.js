import { createButtonClass, createButtonID } from "./modules/button";
import { openProjectDialog } from "./modules/dialog";
import { createDivId } from "./modules/div";
import { createProjectForm } from "./modules/form";
import { createDivH2 } from "./modules/header";
import { getProjectList } from "./projectList";



export function createProjectDashboard(){
    const projectDiv = createDivH2("your-project-container","dashboard-projects","Projects");
    const projectListDiv = createDivId("project-list");
    projectDiv.appendChild(projectListDiv);
    const projectList = getProjectList();
    projectList.forEach( (project)=>{
        const projectBtn = createButtonClass("project-button",project.title);
        projectListDiv.appendChild(projectBtn);
    });

    const addProjBtn = createButtonID("add-project-btn","Add a Project");
    addProjBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        const form = createProjectForm();
        const dialog = openProjectDialog(form);
        document.querySelector("#content-container").appendChild(dialog);
        dialog.showModal();
    });
    projectDiv.appendChild(addProjBtn);
    
    return projectDiv;
}