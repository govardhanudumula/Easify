import React from "react";

class SidebarComponent extends React.Component
{

    render()
    {
        return(
            <>
            <div className="col-2">           
                <ul className="list-unstyled ps-5 pt-3 hover-style">
                   <li className="p-2"><i className="bi bi-menu-button-wide pe-2"></i>Dashboard</li>
                   <li className="p-2"><i className="bi bi-check-circle pe-2"></i>Approved</li>
                </ul>
            </div>
            </>
           
        )
    }
}

export default SidebarComponent;