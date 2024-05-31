import React from "react";


interface INavbarProps
{
  getActiveNavItem:(activeItem:string)=>void;
}

interface INavbarState
{
    activeItem:string;   
}


class NavbarComponent extends React.Component<INavbarProps,INavbarState>
{

  constructor(props:INavbarProps)
  {
    super(props);
    this.state={
      activeItem :"Dashboard"
    }
  }

    
   
    updateActiveItem =(item:string)=>{
       this.setState({activeItem:item},()=>{
        this.props.getActiveNavItem(item);
       })
    }
    
    list = ["Dashboard","Approved"];
    render()
    {
        return (
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
                    <input type="text" className="w-100 border-1 rounded-pill" placeholder="Search by name..."/>
                  </div>
                <div className="col-2 d-flex justify-content-end align-items-center">
                  <button className="border-0 px-4 py-2 bg-easify text-white" style={{ borderRadius: '10px'}}>New Candidate</button>
                </div>
              </div>
            </div>
          ); 
    }

}
export default NavbarComponent;
