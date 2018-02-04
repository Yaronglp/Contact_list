import Icon from '../general/Icon';

const MemberIcon = (props) => {
    const {picture, fullname, classProp, isMemberList, showFullNameLabel, clickHandler, itemId} = props;

    return <div className={classProp} onClick={() => clickHandler(itemId)}>
                <Icon classname={isMemberList ? "img_icon list_member_pic" : "img_icon"}
                      url={picture}
                      title={fullname}/>
                {showFullNameLabel ? <h3 className="truncate">{fullname}</h3> : null}
           </div>;
};

MemberIcon.defaultProps = {
  picture:'https://myspace.com/common/images/user.png'
};

export default MemberIcon;