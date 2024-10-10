import {Project} from "./Project.js";
import {Todo} from "./Todo.js";

let projectList = [(new Project("Default Project",[]))]; 
const todo = new Todo("Add more Todos","More cards","2024-12-31","Medium");
projectList[0].addTodo(todo);

export function getProjectList(){
    return projectList;
}

export function getCurrentProject(){
    console.log(projectList[0]);
    return projectList[0];
}

export function addProjectToList(project){
    projectList.push(project);
}