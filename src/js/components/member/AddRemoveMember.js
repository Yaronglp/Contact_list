import Icon from '../general/Icon';

const AddRemoveMember = ({handleRmvClick, handleAddClick, permitToRemove}) => {

    let remClsName = `add_remove_btn_container member_btn remove_btn_container " ${!permitToRemove ? "disabled" : null}`;

    return (
        <div className="additional_btn">
            <div className={remClsName} onClick={handleRmvClick}>
                <Icon classname="add_remove_btn remove_btn truncate"/>
            </div>
            <div className="add_remove_btn_container member_btn add_btn_container" onClick={handleAddClick}>
                <Icon classname="add_remove_btn add_btn truncate"/>
            </div>
        </div>
    );
};

export default AddRemoveMember;