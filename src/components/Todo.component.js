import { useState }from 'react';
import Modal from './Modal.component';
import Backdrop from './Backdrop.component';


function Todo(props) {
    const [modalIsOpen, setModalOpen ] = useState(false);

    function deleteHandler() {
        setModalOpen(true);
    }

    function closeModalHandler() {
        setModalOpen(false);
    }




    return(
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button> 
        </div>
        {/* dynamic expression */}
        {modalIsOpen && <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler}/>}
        {modalIsOpen && <Backdrop onClick = {closeModalHandler} />}
        </div>
    );
}




export default Todo;