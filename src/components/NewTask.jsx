import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({onAdd}){
    const[enteredValue , setEnteredValue] = useState('');
    const modal = useRef();
    function handleEnteredValue(event){
        setEnteredValue(event.target.value);
    }
    let invalid ;
    function handleClick(){
        if(enteredValue.trim() === ''){
            modal.current.open();
            return;
        }
        onAdd(enteredValue);
        setEnteredValue('');
    }
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            handleClick();
        }
    }
    return(
    <>
    <Modal ref={modal} buttonDialog='close'>
        <h2 className="text-xl font-bold mb-4">Invalid Input</h2>
         <p className="mb-4">Please enter a valid task before adding</p>
    </Modal>
    <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleEnteredValue} value={enteredValue} onKeyDown={handleKeyDown}/>
        <button className="text-stone-600 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
    </>
    );
}