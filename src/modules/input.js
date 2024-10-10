
export function createInput(input_type,input_id,input_placeHolder){
    const input = document.createElement("input");
    input.type = input_type;
    input.id = input_id;
    input.name = input_id;
    input.placeholder = input_placeHolder;
    input.value = "";

    return input;
}