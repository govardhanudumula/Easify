import React from "react";
import ICandidate from "../../Interfaces/ICandidate";

interface IDashboardProps
{
    candidates:ICandidate[];
}

class DashboardComponent extends React.Component<IDashboardProps>
{
    constructor(props: IDashboardProps)
    {
        super(props)
    }


    render()
    {
        return(
            <>
            <div>
                 <table className="table" >
                        <thead className="thead-light">
                            <tr className="row">
                                <th className="col-2">Full Name</th>
                                <th className="col-3">Gmail</th>
                                <th className="col-3">Designation</th>
                                <th className="col-2">Experience Type</th>
                                <th className="col-1 text-center">Status</th>
                                <th className="col-1">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.candidates.map((candidate:ICandidate)=>{
                            return <tr className="row" >
                                    <td className="col-2">{candidate.fullname}</td>
                                    <td className="col-3">{candidate.gmail}</td>
                                    <td className="col-3">{candidate.designation}</td>
                                    <td className="col-2">{candidate.experiencetype}</td>
                                    <td className="col-1 text-center text-white">
                                        <span className={`rounded-4 bg-success1
                                             ${candidate.verificationstatus==="pending"? 'bg-pending':'bg-emailsend'} `}
                                                 style={{padding:"3px 10px",fontSize:"12px"}} >
                                                    {candidate.verificationstatus}
                                        </span>
                                    </td>
                                    <td id={candidate.gmail} className="col-1 ">  
                                        <i className="bi bi-pencil-fill text-easify px-2"></i>
                                        <i className="bi bi-eye-fill text-easify px-2"></i>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
            </div>
            </>
        )
    }

}
export default DashboardComponent;