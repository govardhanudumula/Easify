import React from "react";
import { Modal } from "react-bootstrap";
import { ICandidateDetails } from "../../Interfaces/ICandidate";

interface ICandidateDetailsProps
{
    CandidateData:ICandidateDetails
    onClose:(closeDetails:boolean)=>void;
}

interface ICandidateDetailsState
{
    show:boolean;
}

class CandidateDetailsComponent extends React.Component<ICandidateDetailsProps,ICandidateDetailsState>
{   
    constructor(props:ICandidateDetailsProps)
    {
        super(props)
    }

    handleClose = ()=>{
        this.props.onClose(false);
    }
    
    render()
    {
        const { Candidate, PersonalDetails, EducationDetails, ExperienceDetails } = this.props.CandidateData;
        return(
            <>
               <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={true}
                    size="xl"
                    >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Candidate Details
                        </Modal.Title>
                        <button type="button" className="btn-close float-end" aria-label="Close" onClick={this.handleClose} ></button>
                    </Modal.Header>
                    <Modal.Body>
                        <div>  

                          <div className="row column-gap-5">
                            <h6>Basic Details :</h6>
                            <div className="col-5">
                                    <form action=""> 
                                        <label htmlFor="" className="w-100 mb-2">
                                            Full Name
                                            <br />
                                            <input type="text" className="w-100" name="fullname" value={Candidate.fullname} disabled/>
                                        </label>
                                        
                                        <label htmlFor="" className="mb-2 w-100" >
                                            Email
                                            <br />
                                            <input type="mail" className="w-100" name="gmail"  value={Candidate.gmail} disabled/>
                                        </label>

                                    </form>
                                </div>
                                <div className="col-5">
                                <form action="">
                                    <label htmlFor="" className="w-100 mb-2">
                                        Experience Type
                                        <br />
                                        <input type="text" className="w-100" name="fullname" value={Candidate.experiencetype} disabled/>
                                    </label>
                                    <label htmlFor="" className="mb-2 w-100" >
                                        Designation
                                        <br />
                                        <input type="mail" className="w-100" name="gmail"  value={Candidate.designation} disabled/>
                                    </label>
                                </form>
                            </div>
                          </div>

                           <div className="row mt-2 column-gap-5">
                            <h6>Personal Details : </h6>
                            <div className="col-5">
                                    <form action=""> 
                                    <label htmlFor="" className="mb-2 w-100" >
                                            Aadhar Number
                                            <br />
                                            <div className="d-flex gap-2">
                                                <input type="mail" className="w-100" name="gmail"  value={PersonalDetails.AadharNumber} disabled/>
                                                {Candidate.experiencetype && <span className="px-2 rounded-4 text-white" style={{padding:"4px 8px",backgroundColor:"#28a745",fontSize:"12px"}}>Verified</span>}
                                            </div>

                                        </label>
                                        
                                        <label htmlFor="" className="mb-2 w-100" >
                                            Pan Number
                                            <br />
                                            <div className="d-flex gap-2">
                                                <input type="mail" className="w-100" name="gmail"  value={PersonalDetails.PanNumber} disabled/>
                                                {Candidate.experiencetype && <span className="px-2 rounded-4 text-white" style={{padding:"4px 8px",backgroundColor:"#28a745",fontSize:"12px"}}>Verified</span>}
                                            </div>

                                        </label>

                                    </form>
                                </div>
                                <div className="col-5">
                                <form action="">
                                    
                                    <label htmlFor="" className="mb-2 w-100" >
                                            Uan Number
                                            <br />
                                            <div className="d-flex gap-2">
                                                <input type="mail" className="w-100" name="gmail"  value={PersonalDetails.UanNumber} disabled/>
                                                {Candidate.experiencetype && <span className="px-2 rounded-4 text-white" style={{padding:"4px 8px",backgroundColor:"#28a745",fontSize:"12px"}}>Verified</span>}
                                            </div>

                                        </label>
                                    <label htmlFor="" className="mb-2 w-100" >
                                        
                                        <br />
                                       
                                    </label>
                                </form>
                            </div>
                          </div>

                          <div className="row mt-2">
                            <h6>Education Details :</h6>
                            <div className="col-12">
                                    <table className="w-100">
                                        <tr>
                                            <th className="p-1">
                                                Institute Name
                                            </th>
                                            <th className="p-1">
                                                Education
                                            </th>
                                            <th className="p-1 text-center">
                                                Stream
                                            </th>
                                            <th className="p-1 text-center">
                                                Joining Year
                                            </th>
                                            <th className="p-1 text-center">
                                                Passedout Year
                                            </th>
                                            <th className="p-1">
                                                Cerificates
                                            </th>
                                            <th className="p-1">
                                                Status
                                            </th>     
                                        </tr>

                                        {EducationDetails.map((item)=>{

                                            return <tr>
                                                <td className="p-1">
                                                    {item.CollegeName}
                                                </td>
                                                <td className="p-1">
                                                    {item.EducationType}
                                                </td>
                                                <td className="p-1 text-center">
                                                    {item.Stream}
                                                </td>
                                                <td className="p-1 text-center">
                                                    {item.JoiningYear}
                                                </td>
                                                <td className="p-1 text-center">
                                                    {item.PassoutYear}
                                                </td>
                                                <td className="p-1">
                                                    <span style={{ textDecoration: 'underline', color: 'blue' }}> {item.Document}</span>
                                                </td>
                                                <td className="p-1">
                                                    {item.Status  && <span className="px-2 rounded-4 text-white" style={{padding:"4px 8px",backgroundColor:"#28a745",fontSize:"12px"}}>Verified</span>}
                                                </td>
                                            </tr>
                                        })}
                                    </table>
                            </div>
                          </div>

                          <div className="row mt-3">
                            <h6>Experience Details :</h6>
                            <div className="col-12">
                                    <table className="w-100">
                                        <tr>
                                            <th className="p-1">
                                                Company Name
                                            </th>
                                            <th className="p-1">
                                                Website Url
                                            </th>
                                            <th className="p-1 text-center">
                                                Date of Join
                                            </th>
                                            <th className="p-1 text-center">
                                                Date of Exit
                                            </th>
                                            <th className="p-1">
                                                Experience
                                            </th>
                                            <th className="p-1">
                                                Documents
                                            </th>
                                            <th className="p-1">
                                                Status
                                            </th>     
                                        </tr>

                                        {ExperienceDetails.map((item)=>{

                                            return <tr>
                                                <td className="p-1">
                                                    {item.CompanyName}
                                                </td>
                                                <td className="p-1">
                                                    {item.WebsiteUrl}
                                                </td>
                                                <td className="p-1 text-center">
                                                    {item.DOJ}
                                                </td>
                                                <td className="p-1 text-center">
                                                    {item.DOE}
                                                </td>
                                                <td className="p-1 text-center">
                                                    {item.Experience}
                                                </td>
                                                <td className="p-1">
                                                    <span style={{ textDecoration: 'underline', color: 'blue' }}> {item.Document}</span>
                                                </td>
                                                <td className="p-1">
                                                    {item.Status  && <span className="px-2 rounded-4 text-white" style={{padding:"4px 8px",backgroundColor:"#28a745",fontSize:"12px"}}>Verified</span>}
                                                </td>
                                            </tr>
                                        })}
                                    </table>
                            </div>
                          </div>


                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                      
                    </Modal.Footer>
                </Modal> 
            </>
        )

    }
}
export default CandidateDetailsComponent