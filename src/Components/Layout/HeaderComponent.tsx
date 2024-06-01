import React from "react";
import companylogo from "../../Assets/easify.png"
import profilelogo from "../../Assets/profilelogo.svg"
import logo from "../../Assets/easify (2).png"
import "../../App.css";
class HeaderComponent extends React.Component
{
    render()
    {
        return(
            <>
                <div className="d-flex align-items-center justify-content-between border-bottom bg-easify px-5">
                    <div>
                        <img src={logo} alt="" className="company-logo  pb-2 pt-3"/>
                    </div>
                    <div >
                        <img src={profilelogo} alt="" className="profile-logo"/>
                    </div>
                </div>
            </>
        )
    }
}

export default HeaderComponent;