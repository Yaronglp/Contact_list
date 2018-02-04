import {Component} from 'react';

class Modal extends Component{
    constructor(){
        super();
        this.defaultClass = 'default_modal';
    }

    get defaultModalClass(){
        return this.defaultClass;
    }

    closeModal(){
        this.props.closeHandler();
    }
}

export default Modal;