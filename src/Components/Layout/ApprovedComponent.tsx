import React from "react";
import ICandidate from "../../Interfaces/ICandidate";

interface IApprovedProps
{
    candidates:ICandidate[];
}

class ApprovedComponent extends React.Component<IApprovedProps>
{
    constructor(props : IApprovedProps)
    {
        super(props);
    }

    render()
    {
        return(
            <>
                 <div className="rounded-2 p-3">
                 <table className="row py-3">
                        <thead className="bg-white">
                            <tr className="row p-1 py-3 " id="bg-white" >
                                <th className="col-2">Full Name</th>
                                <th className="col-3">Gmail</th>
                                <th className="col-3">Designation</th>
                                <th className="col-2">Experience Type</th>
                                <th className="col-1 text-center">Status</th>
                                <th className="col-1 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.candidates.map((candidate:ICandidate)=>{
                            return <tr className="row p-1 py-3" >
                                    <td className="col-2">{candidate.fullname}</td>
                                    <td className="col-3">{candidate.gmail}</td>
                                    <td className="col-3">{candidate.designation}</td>
                                    <td className="col-2">{candidate.experiencetype}</td>
                                    <td className="col-1 text-center"><span className="px-2 rounded-4 text-white" style={{padding:"4px 8px",backgroundColor:"#28a745",fontSize:"12px"}}>{candidate.verificationstatus}</span></td>
                                    <td id={candidate.gmail} className="col-1 text-center">  
                                        <span><i className="bi bi-eye-fill text-easify px-2"></i></span>
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
export default ApprovedComponent;