import { createButtonID } from "./button";

export function openProjectDialog(form){
    const dialog = document.createElement("dialog");
    dialog.style.display = "block";

    const closeBtn = createButtonID("close-dialog-btn","Close");
    closeBtn.addEventListener("click",(event)=>{
        event.preventDefault();
        dialog.style.display="none";
    });
    dialog.appendChild(form);
    dialog.appendChild(closeBtn);

    return dialog;
}