import React from "react";
import { NavLink } from "react-router-dom";

const listLink = [
  {
    LinkPage: "otp",
    NamePage: "OTP",
  },
  {
    LinkPage: "inputPhoneNumber",
    NamePage: "Input Phone Number",
  },
  {
    LinkPage: "multiStepForm",
    NamePage: "Multi Step Form",
  },
  {
    LinkPage: "SlideBanner",
    NamePage: "Slide Banner",
  },
];

function Home() {
  return (
    <>
      <nav className="bg-roman-900 w-[99%] h-[70px] px-[30px] m-[0.5%] rounded-[20px] flex items-center fixed top-0 left-0">
        <div className="text-[24px] font-semibold text-roman-50 mr-[50px]">My Component</div>
        <input type="text" id="search-navbar" placeholder="Search..." className="h-[40px] w-[400px] rounded-[10px] px-[10px] outline-none"/>
      </nav>
      {/* <div className="">
        {listLink.map((list) => {
          return (
            <li>
              <NavLink to={list.LinkPage}>{list.NamePage}</NavLink>
            </li>
          );
        })}
      </div> */}
    </>
  );
}

export default Home;
