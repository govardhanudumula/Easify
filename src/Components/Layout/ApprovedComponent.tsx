import React from "react";
import ICandidate, { ICandidateDetails } from "../../Interfaces/ICandidate";
import CandidateDetailsComponent from "./CandidateDetailsComponent";
import { getCandidateBygmail } from "../../Common/Dummydata";

interface IApprovedProps
{
    candidates:ICandidate[];
}

interface IApprovedState
{
    candidateData:ICandidateDetails
    openDetails:boolean;
}

class ApprovedComponent extends React.Component<IApprovedProps,IApprovedState>
{
    constructor(props : IApprovedProps)
    {
        super(props);
        this.state={
            candidateData: {
                Candidate: {
                    fullname: "",
                    gmail: "",
                    designation: "",
                    experiencetype: "",
                    verificationstatus: ""
                },
                PersonalDetails: {
                    AadharNumber: 0,
                    AadharVerifyStatus: false,
                    PanNumber: "",
                    PanVerifyStatus: false,
                    UanNumber: 0,
                    UanVerifyStatus: false,
                    Status: false
                },
                EducationDetails: [],
                ExperienceDetails: []
            },
            openDetails:false
        }
    }


    handleViewClick =  (gmail:string)=>{
        const candidateDetails:ICandidateDetails = getCandidateBygmail(gmail);
        this.setState({candidateData:candidateDetails},()=>{
            this.setState({openDetails:true})
        })
    }

    handleClose = (openForm:boolean)=>{
        this.setState({openDetails:openForm})
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
                                    <td className="col-1 text-center">  
                                        <span  className="cursor-pointer" onClick={()=>this.handleViewClick(candidate.gmail)}><i className="bi bi-eye-fill text-easify px-2"></i></span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
            </div>
            {this.state.openDetails && < CandidateDetailsComponent  CandidateData={this.state.candidateData} onClose={this.handleClose}/>}
            </>
        )
    }

}
export default ApprovedComponent;