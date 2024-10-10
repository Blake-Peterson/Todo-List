import { createButtonClass, createButtonID } from "./button";
import { addProjectToList, getCurrentProject,getProjectList } from "../projectList";
import { Project } from "../Project.js";
import { createLabel } from "./label.js";
import { createInput } from "./input.js";


export function createProjectForm(project){
    const form = document.createElement("form");
    form.setAttribute("id","project-form");
        
    const projectNameDiv = createLabelInputDiv("project_title","text","Project Name");
    form.appendChild(projectNameDiv);
    
    const submitBtn = createButtonID("submit-form","Submit");
    submitBtn.addEventListener("click",(event)=>{
        event.preventDefault();
        const projectTitle = document.getElementById("project_title").value;
        if(projectTitle){
            addProjectToList(new Project(projectTitle,[]));
            console.log(getProjectList());

            const projectListDiv = document.querySelector("#project-list");
            const projectBtn = createButtonClass("project-button",projectTitle);
            projectListDiv.appendChild(projectBtn);

            form.reset();
        }
    }); 
    
    form.appendChild(submitBtn);
    
    return form;
}

function createTodoForm(){
    const form = document.createElement("form");
    
    
    const submitBtn = createButtonID("submit-form","Submit");
    form.appendChild(submitBtn);
    
    return form;
}


export function createLabelInputDiv(labelFor_inputId,label_text,input_type,input_placeholder){
    const div = document.createElement("div");
    div.appendChild(createLabel(labelFor_inputId,label_text));
    div.appendChild(createInput(input_type,labelFor_inputId,input_placeholder));

    return div;
}

