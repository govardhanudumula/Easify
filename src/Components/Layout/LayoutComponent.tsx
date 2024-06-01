import React from "react";
import HeaderComponent from "./HeaderComponent";
import NavbarComponent from "./NavbarComponent";
import DashboardComponent from "./DashboardComponent";
import ApprovedComponent from "./ApprovedComponent";
import ICandidate from "../../Interfaces/ICandidate";
import { getPendingCandidate } from "../../Common/Dummydata";
import { getVerifiedCandidates } from "../../Common/Dummydata";
import { AddCandidate } from "../../Common/Dummydata";

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

    onAddCandidate = (candidate:ICandidate)=>{
        AddCandidate(candidate);
        this.setState({candidates:getPendingCandidate()});
    }

    onSearching = (searchName:string)=>{
        searchName = searchName.trim();
        if(this.state.selectedNavItem==="Dashboard")
            this.setState({candidates:getPendingCandidate().filter(candidate=>candidate.fullname.toLowerCase().includes(searchName.toLowerCase()))});
        else
            this.setState({candidates:getVerifiedCandidates().filter(candidate=>candidate.fullname.toLowerCase().includes(searchName.toLowerCase()))});
    }
 
    render()
    {
        
        return(
            <>
                <div  style={{backgroundColor:"#edf1f7"}}>
                    <div className="top-0 position-sticky">
                        <HeaderComponent/>
                        <NavbarComponent getActiveNavItem = {this.updateSelectedNavItem}  onAddCandidate={this.onAddCandidate}
                        onSearching = {this.onSearching} />
                    </div>
                 
                    <div className="mt-4" style={{backgroundColor:"#edf1f7",padding:"0px 75px"}}>
                        {this.state.selectedNavItem==="Dashboard"?<DashboardComponent  candidates={this.state.candidates}/>:<ApprovedComponent candidates={this.state.candidates}/>}                       
                    </div>
                 
                </div>
            
            </>
        )

    }
}
export default LayoutComponent;