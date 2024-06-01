import React from "react";
import { Modal } from "react-bootstrap";
import { getDesignations } from "../../Common/Dummydata";
import ICandidate from "../../Interfaces/ICandidate";

interface IAddCandidateProps
{
    openForm:boolean
    onClose:(closeForm:boolean)=>void;
    onFormSubmit:(candidate:ICandidate)=>void;
}

interface IAddCandidateState
{
    show:boolean,
    candidate:ICandidate,
}

class AddCandidateComponent extends React.Component<IAddCandidateProps,IAddCandidateState>
{
    constructor(props:IAddCandidateProps)
    {
        super(props);
        this.state={
            show:this.props.openForm,
            candidate:{
                fullname:"",
                gmail:"",
                designation:"",
                experiencetype:"",
                verificationstatus:"email sent"
            }
        }
    }

    handleClose = ()=>{
        this.setState({show:false},()=>{
            this.props.onClose(true);
        })
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            candidate: {
                ...prevState.candidate,
                [name]: value
            }
        }));
    }

    handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            candidate: {
                ...prevState.candidate,
                [name]: value
            }
        }));
    }

    onFormSubmit = async ()=>{
        await this.setState({show:false})
        this.props.onFormSubmit(this.state.candidate);
    }

    render()
    {  
        return(
            <>
                <Modal

                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show}
                   >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Add Candidate
                       
                        </Modal.Title>
                        <button type="button" className="btn-close float-end" aria-label="Close" onClick={this.handleClose}></button>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <form action="">
                                <label htmlFor="" className="mb-2 w-100">
                                    Full Name
                                    <br />
                                    <input type="text" className="w-100" name="fullname" value={this.state.candidate.fullname} onChange={this.handleInputChange}/>
                                </label> <br />
                                <label htmlFor="" className="mb-2 w-100">
                                    Email
                                    <br />
                                    <input type="mail" className="w-100" name="gmail"  value={this.state.candidate.gmail} onChange={this.handleInputChange}/>
                                </label><br />
                                <label htmlFor="experiencetype" className="mb-2 w-100">  
                                    Experience Type
                                    <br />
                                    <select name="experiencetype" id="experiencetype" className="w-100" style={{height:"2rem"}}
                                    value={this.state.candidate.experiencetype}
                                    onChange={this.handleSelectChange}>
                                        <option value="" disabled>Experience Type</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="Experienced">Experience</option>
                                    </select>
                                </label><br />

                                <label htmlFor="" className="w-100">
                                    Designation
                                    <br />
                                    <select name="designation" id="" className="w-100" style={{height:"2rem"}}
                                       value={this.state.candidate.designation}
                                       onChange={this.handleSelectChange}>
                                        <option value="" disabled>Select Designation</option>
                                        { getDesignations().map((role)=>{
                                            return <option value={role}>{role}</option>
                                        })}
                                    </select>
                                </label>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="border-0 rounded py-2 bg-easify text-white px-4" onClick={this.onFormSubmit}>Add</button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default AddCandidateComponent;