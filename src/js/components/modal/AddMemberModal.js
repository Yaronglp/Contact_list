import Modal from './Modal';

class AddMemberModal extends Modal{

    constructor(){
        super();
        this.state = {
            fullname:'',
            email:'',
            phoneNumber:'',
            title:'',
            picture:'',
            facebook:'',
            linkedin:'',
            isValidForm:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm(key, value){
        if(key === 'fullname'){
            this.setState({
                [key]:value,
                isValidForm:value.length > 0
            });
        }
        else{
            this.setState({
                [key]:value
            });
        }
    }

    handleChange(e){
        this.validateForm(
            e.target.getAttribute('data-input'),
            e.target.value
        );
    }

    handleSubmit(e){
        e.preventDefault();

        let obj = Object.assign(this.state);

        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key] === '')
                    obj[key] = undefined;
            }
        }

        this.props.clickHandler(obj);
    }

    render(){
        const {classname} = this.props;
        const {fullname, email, phoneNumber, title, picture, facebook, linkedin, isValidForm} = this.state;

        return <div className={classname || this.defaultModalClass}>
                    <form className="modal_form" onSubmit={this.handleSubmit}>
                        <label htmlFor="fullname"
                               className="modal_form_label">Fullname</label>
                        <input type="text"
                               id="fullname"
                               value={fullname}
                               className={fullname.length > 0 ? null : 'error'}
                               data-input="fullname"
                               onChange={this.handleChange}/>
                        <label htmlFor="title"
                               className="modal_form_label">Title</label>
                        <input type="text"
                               id="title"
                               value={title}
                               data-input="title"
                               onChange={this.handleChange}/>
                        <label htmlFor="email"
                               className="modal_form_label">Email</label>
                        <input type="email"
                               id="email"
                               value={email}
                               data-input="email"
                               onChange={this.handleChange}/>
                        <label htmlFor="phoneNumber"
                               className="modal_form_label">Phone</label>
                        <input type="text"
                               id="phoneNumber"
                               value={phoneNumber}
                               data-input="phoneNumber"
                               onChange={this.handleChange}/>
                        <label htmlFor="picture"
                               className="modal_form_label">Picture</label>
                        <input type="text"
                               id="picture"
                               value={picture}
                               data-input="picture"
                               onChange={this.handleChange}/>
                        <label htmlFor="facebook"
                               className="modal_form_label">facebook</label>
                        <input type="text"
                               id="facebook"
                               value={facebook}
                               data-input="facebook"
                               onChange={this.handleChange}/>
                        <label htmlFor="linkedin"
                               className="modal_form_label">linkedin</label>
                        <input type="text"
                               id="linkedin"
                               value={linkedin}
                               data-input="linkedin"
                               onChange={this.handleChange}/>
                        <input type="button"
                               value="Close"
                               className="modal_btn negative_btn"
                               onClick={() => this.closeModal()}/>
                        <input type="submit"
                               value="Add Member"
                               className={!isValidForm ? "disabled_submit_btn modal_btn positive_btn" :
                                   "modal_btn positive_btn"}
                               disabled={!isValidForm}/>
                    </form>
               </div>
    }
}

export default AddMemberModal;