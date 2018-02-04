import Icon from '../general/Icon';

const AddRemoveMember = ({handleRmvClick, handleAddClick, permitToRemove}) =>
    <div className="additional_btn">
        <div className={permitToRemove ? "add_remove_btn_container member_btn remove_member_btn" :
            "add_remove_btn_container member_btn remove_member_btn disabled"} onClick={handleRmvClick}>
            <Icon classname="add_remove_btn remove_btn truncate"/>
        </div>
        <div className="add_remove_btn_container member_btn add_member_btn" onClick={handleAddClick}>
            <Icon classname="add_remove_btn add_btn truncate"/>
        </div>
    </div>;

export default AddRemoveMember;