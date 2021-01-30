import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CgUserList } from "react-icons/cg";
import { IoMdCar, IoMdCard } from "react-icons/io";
import { BsSearch, BsEnvelope, BsBriefcaseFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { ImTree } from "react-icons/im";

const SideBar = () => {
  //add and remove active class on the links
  useEffect(() => {
    const links = [...document.querySelectorAll(".sidebar-menu ul li")];

    links.map((link) =>
      link.addEventListener("click", () => {
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");

        document
          .querySelector(".chat-main-section > div:first-child")
          .classList.remove("show");
      })
    );
  }, []);

  return (
    <aside className="sidebar min-height">
      <div className="sidebar-menu">
        <ul>
          <li>
            <Link to="/accounts/profile">
              <CgUserList className="icon" />
              &nbsp;<span className="name">Employer Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts/onboard-your-vehicles">
              <IoMdCar className="icon" />
              &nbsp;<span className="name">Onboard Your Vehicles</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts/search-and-hire-drivers">
              <BsSearch className="icon" />
              &nbsp;<span className="name">Search &amp; Hire Drivers</span>
            </Link>
          </li>
          <li className="active unread-messages">
            <Link to="/accounts/inbox">
              <BsEnvelope className="icon" />
              &nbsp;<span className="name">Inbox</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts/recruitment">
              <BsBriefcaseFill className="icon" />
              &nbsp;<span className="name">Recruitment</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts/my-organisations">
              <ImTree className="icon" />
              &nbsp;<span className="name">My Organizations</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts/rate-a-driver">
              <AiTwotoneStar className="icon" />
              &nbsp;<span className="name">Rate a Driver</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts/my-subscription">
              <IoMdCard className="icon" />
              &nbsp;<span className="name">My Subscription</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
