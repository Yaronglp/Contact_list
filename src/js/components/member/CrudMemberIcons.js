import Icon from '../general/Icon';
import FaEdit from "react-icons/lib/fa/edit";

const CrudMemberIcons = ({handleRmvClick, handleAddClick, handleEditClick, permitToRemove}) => {

    let baseClsName = "crud_btn_container member_btn";
    let remClsName = `${baseClsName} remove_btn_container " ${!permitToRemove ? "disabled" : null}`;
    let addClsName = `${baseClsName} add_btn_container`;
    let editClsName = `${baseClsName} edit_btn_container`;

    return (
        <div className="additional_btn">
            <div className={remClsName} onClick={handleRmvClick}>
                <Icon classname="add_remove_btn remove_btn truncate"/>
            </div>
            <div className={editClsName} onClick={handleEditClick}>
                <FaEdit className="add_remove_btn edit_btn"/>
            </div>
            <div className={addClsName} onClick={handleAddClick}>
                <Icon classname="add_remove_btn add_btn truncate"/>
            </div>
        </div>
    );
};

export default CrudMemberIcons;