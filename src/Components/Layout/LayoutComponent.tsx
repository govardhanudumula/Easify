import React from "react";
import HeaderComponent from "./HeaderComponent";
import NavbarComponent from "./NavbarComponent";
import DashboardComponent from "./DashboardComponent";
import ApprovedComponent from "./ApprovedComponent";
import ICandidate from "../../Interfaces/ICandidate";
import { getPendingCandidate } from "../../Common/Dummydata";
import { getVerifiedCandidates } from "../../Common/Dummydata";

interface ILayoutState
{
    selectedNavItem:string
    candidates:ICandidate[],
}

class LayoutComponent extends React.Component<{},ILayoutState>
{

    state: ILayoutState = {
        selectedNavItem: "Dashboard",
        candidates: getPendingCandidate()
    }

    updateSelectedNavItem = (activeNavItem:string)=>{
        this.setState({selectedNavItem:activeNavItem},()=>
          {
                if(activeNavItem==="Dashboard")
                {
                    this.setState({candidates:getPendingCandidate()});
                }
                else
                    this.setState({candidates:getVerifiedCandidates()});
          }
        )
    }
 
    render()
    {
        
        return(
            <>
                <div>
                    <HeaderComponent/>
                    <NavbarComponent getActiveNavItem = {this.updateSelectedNavItem} />
                    <div className="px-5" style={{backgroundColor:"#edf1f7"}}>
                        {this.state.selectedNavItem==="Dashboard"?<DashboardComponent  candidates={this.state.candidates}/>:<ApprovedComponent candidates={this.state.candidates}/>}                       
                    </div>
                 
                </div>
            
            </>
        )

    }
}
export default LayoutComponent;