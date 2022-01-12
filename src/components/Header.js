//rafce

import react from 'react';
import './Header.scss';

const Header = ({ title }) => {
  return (
    <div>
      <h3 class="your-present">&#8650; This is your gift &#8650;</h3>
    </div>
  );
  // return react.createElement(
  //   'div',
  //   {},
  //   react.createElement(
  //     'header',
  //     {},
  //     react.createElement('h1', { style: headingStyle }, '今天是2022年1月13日')
  //   )
  // );
};

//CSS in JS
const headingStyle = {
  color: '#e85a4f',
  paddingLeft: '100px',
  fontFamily: 'Gill Sans, sans-serif',
  fontSize: '50px',
  font: 'bold',
  // backgroundColor: 'yellow',
};

Header.defaultProps = {
  title: ' default title',
};

export default Header;
