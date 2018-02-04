import Modal from './Modal';

class DelMemberModal extends Modal{
    constructor(){
        super();
        this.message = '';
    }

    componentWillMount(){
        const {member} = this.props;

        this.message = `Delete '${member.fullname}' from your contacts ?`
    }

    render(){
        const {classname, clickHandler} = this.props;

        const wrapperClass = `${classname} ${this.defaultModalClass}`;

        return <div className={wrapperClass}>
                  <h2 className="remove_message">{this.message}</h2>
                  <div className="btn_section">
                      <input type="button"
                             className="modal_btn negative_btn"
                             onClick={() => this.closeModal()}
                             value="No"/>
                      <input type="button"
                             className="modal_btn positive_btn"
                             onClick={clickHandler}
                             value="Yes"/>
                  </div>
               </div>
    }
}

DelMemberModal.defaultProps = {
    classname:'removeModal'
};

export default DelMemberModal;