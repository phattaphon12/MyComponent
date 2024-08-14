import React from 'react'
import { NavLink } from 'react-router-dom';

const listLink = [
  {
    LinkPage: 'otp',
    NamePage: 'OTP'
  }, 
  {
    LinkPage: 'inputPhoneNumber',
    NamePage: 'Input Phone Number'
  }, 
  {
    LinkPage: 'multiStepForm',
    NamePage: 'Multi Step Form'
  },
  {
    LinkPage: 'SlideBanner',
    NamePage: 'Slide Banner'
  },
];

function Home() {
  return (
    <div>
      {listLink.map((list) => {
        return (
          <li><NavLink to={list.LinkPage}>{list.NamePage}</NavLink></li>
        );
      })}
    </div>
  )
}

export default Home
