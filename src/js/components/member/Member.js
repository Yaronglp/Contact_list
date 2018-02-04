import Icon from './MemberIcon';

const Member = (item, index, clickHandler) =>
       <Icon key={index}
             itemId={index}
             classProp="list_member_pic_wrapper"
             fullname={item.fullname}
             isMemberList={true}
             picture={item.picture}
             clickHandler={clickHandler}/>;

export default Member;