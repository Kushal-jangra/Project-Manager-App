import { useRef } from "react";
import Inputs from "./Inputs.jsx";
import Modal from "./Modal.jsx";

export default function NewProjects({onAdd , onCancel }){
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;

        if(enterTitle.trim() === '' || enterDescription.trim() === '' || enterDueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title : enterTitle,
            description : enterDescription,
            dueDate : enterDueDate
        })
    }

    return(
    <>
    <Modal ref = {modal} buttonDialog="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops...looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure to provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-5">
            <li>
                <button className="text-stone-700 hover:text-stone-950" onClick ={onCancel}>Cancel</button>
            </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick = {handleSave}>
                    Save
                </button>
            </li>
            
        </menu>
        <div>
            <Inputs ref = {title}  label="text" />
            <Inputs ref = {description} label="description" textArea/>
            <Inputs type = "date" ref ={dueDate} label= "Due Date"/>
        </div>
    </div>
    </>
    )
}