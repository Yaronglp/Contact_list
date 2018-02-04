import Member from './Member';

const MemberList = ({members, currMemberIndex, clickHandler}) =>
    <div className="member_list_wrapper">
        {(members.length) ?  members.map((item, i) => {
                                                        if(i !== currMemberIndex)
                                                            return Member(item, i, clickHandler);
                                                       }) :
        <span>No Members to show.</span>}
    </div>;

export default MemberList;