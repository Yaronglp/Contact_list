import Icon from './MemberIcon';
import MoreInfo from './MoreInfo';

const MainBox = ({picture, fullname, email, phoneNumber, linkedin, facebook, title, forwardFn}) =>
    <div className="main_box">
        <Icon picture={picture}
              fullname={fullname}
              showFullNameLabel={true}
              classProp="profile_icon_section"/>
        <MoreInfo title={title}
                  email={email}
                  phoneNumber={phoneNumber}
                  forwardFn={forwardFn}
                  linkedin={linkedin}
                  facebook={facebook}/>
    </div>;

export default MainBox;