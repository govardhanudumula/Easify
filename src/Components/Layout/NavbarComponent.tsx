import React from "react";
import AddCandidateComponent from "./AddCandidateComponent";
import ICandidate from "../../Interfaces/ICandidate";


interface INavbarProps
{
  getActiveNavItem:(activeItem:string)=>void;
  onAddCandidate:(candidate:ICandidate)=>void
  onSearching:(searchingName:string)=>void;
}

interface INavbarState
{
    activeItem:string;  
    openAddForm:boolean; 
    searchName:string
}


class NavbarComponent extends React.Component<INavbarProps,INavbarState>
{

  constructor(props:INavbarProps)
  {
    super(props);
    this.state={
      activeItem :"Dashboard",
      openAddForm:false,
      searchName:""
    }
  }

    handleClick =()=>{
      this.setState({openAddForm:true});
    }
    
   
    updateActiveItem =(item:string)=>{
       this.setState({activeItem:item},()=>{
        this.props.getActiveNavItem(item);
       })
    }

    handleForm = (closeForm:boolean)=>{
      if(closeForm)
        this.setState({openAddForm:false});
    }
    
    onFormSubmit = async (candidate:ICandidate)=>{
      await this.setState({openAddForm:false});
      this.props.onAddCandidate(candidate);
    }

    handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      await this.setState({searchName:value}); 
      this.props.onSearching(this.state.searchName);
  }

    list = ["Dashboard","Approved"];
    render()
    {
        return (
          <>
            <div className="px-5"  style={{ backgroundColor:"white"}}>
              <div className="navbar row align-items-center" style={{backgroundColor: 'white'}}>
                <div className="col-8 ">
                    <ul className="list-unstyled d-flex align-items-center my-2">
                       {this.list.map((item,index)=>{
                            return <li key={index} className={`px-4 me-2 py-1 list-item ${this.state.activeItem===item?'active-list-item':''}`} onClick={()=>this.updateActiveItem(item)}>{item}</li>
                       })}
                    </ul>
                </div>
                <div className="col-2 py-1">
                    <input type="text" className="w-100 rounded-pill searchbox" placeholder="Search by name..." value = {this.state.searchName} style={{border:"1px solid rgb(116 108 108 / 26%)"}}
                      onChange={this.handleSearch}
                    />
                  </div>
                <div className="col-2 d-flex justify-content-end align-items-center">
                  <button className="border-0 px-4 py-2 bg-easify text-white" style={{ borderRadius: '10px'}} onClick={this.handleClick}>New Candidate</button>
                </div>
              </div>
            </div>
            {this.state.openAddForm && <AddCandidateComponent openForm = {this.state.openAddForm} onClose={this.handleForm} onFormSubmit = {this.onFormSubmit}/>}
          </>  
          ); 
    }

}
export default NavbarComponent;
