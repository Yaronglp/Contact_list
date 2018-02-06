import Icon from '../general/Icon';

const MemberIcon = (props) => {
    const {fullname, picture, classProp, isMemberList, showFullNameLabel, clickHandler, itemId} = props;

    let onImgError = (e) => {
        if(e.target.nodeName === 'IMG'){
            console.error('You are trying to use an invalid picture. please change it to a valid one');
            e.target.src = MemberIcon.defaultProps.picture;
        }
    };

    return <div className={classProp} onClick={() => clickHandler(itemId)} onError={onImgError}>
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