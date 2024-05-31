import React from "react";
import companylogo from ".././../assets/easify.png"
import profilelogo from "../../assets/profilelogo.svg"
import "../../../App.css";
class HeaderComponent extends React.Component
{
    render()
    {
        return(
            <>
                <div className="d-flex align-items-center justify-content-between border-bottom bg-easify px-5">
                    <div>
                        <img src={companylogo} alt="" className="company-logo  pb-2 pt-3"/>
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