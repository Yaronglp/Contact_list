import MdEmail from 'react-icons/lib/md/email';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import PropTypes from 'prop-types';

const MoreInfo = ({email, phoneNumber, linkedin, facebook, title, forwardFn}) =>
  <div className="more_info">
      <h4 title={title} className="member_title truncate">
          {title}
      </h4>
      { facebook ? <span>
            <FaFacebookSquare className="social_icon"
                              onClick={() => forwardFn("facebook")}/>
        </span> : null}
      { linkedin ? <span>
            <FaLinkedinSquare className="social_icon"
                              onClick={() => forwardFn("linkedin")}/>
        </span> : null}
        <div>
            <h4><MdEmail/> {email}</h4>
            <h4><MdLocalPhone/> {phoneNumber}</h4>
        </div>
  </div>;


MoreInfo.defaultProps = {
  email:"noEmail@Specify.com",
  phoneNumber:'0000000',
  title:'friend'
};

MoreInfo.propTypes = {
  phoneNumber:PropTypes.string,
  linkedIn:PropTypes.string,
  facebook:PropTypes.string
};

export default MoreInfo;