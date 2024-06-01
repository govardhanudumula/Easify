import React from 'react';
import { ICandidateFormData } from '../../../../Interfaces/ICandidate';
import LoaderComponent from '../../../../Common/Loader/Loader';

export interface IEmploymentDetailsProps {
    onChangeEMPField: any;
}

export interface IEmploymentDetailState{
    candidate: ICandidateFormData;
    isUANVerified: boolean;
    isUANLoader: boolean;
    showUANOtpField: boolean;
    isPFAvailable: boolean;
    fieldsCount: number;
    underGraduationFieldsCount: number;
}
class EmploymentFormComponent extends React.Component<IEmploymentDetailsProps, IEmploymentDetailState>{

    constructor(props: IEmploymentDetailsProps) {
        super(props);

        this.state = {
            candidate: {} as ICandidateFormData,
            isUANVerified: false,
            isUANLoader: false,
            showUANOtpField: false,
            isPFAvailable: true,
            fieldsCount: 1,
            underGraduationFieldsCount: 1
        }
    }
    onChangeField = (event: any) => {
        var details = this.state.candidate;
        var re = /^[0-9\\b]+$/;
        if (event.target?.name === "uan-number" && (re.test(event?.target?.value) || event?.target?.value === '') && event?.target?.value?.length < 13) {
            details.UAN = event.target?.value;
        }
        if (event.target?.name === "uan-otp" && (re.test(event?.target?.value) || event?.target?.value === '') && event?.target?.value?.length < 7) {
            details.UANOtp = event.target?.value;
        }
        if (event.target?.name === "PF-available") {
            details.PFavailable = !this.state.candidate.PFavailable;
            this.setState({ isPFAvailable: !this.state.isPFAvailable })
        }
        
        this.setState({ candidate: details });
    }
    verifyUAN(e: any) {
        e.preventDefault();
        this.setState({ isUANLoader: true })
        setTimeout(() => {
            this.setState({ isUANVerified: true })
        }, 5000)

    }

    addFormFields = () => {
        this.setState({ fieldsCount: this.state.fieldsCount + 1 });
    }

    removeFormFields = () => {
        this.setState({ fieldsCount: this.state.fieldsCount - 1 });
    }
    addUnderGraduationFormFields = () => {
        this.setState({ fieldsCount: this.state.fieldsCount + 1 });
    }

    removeUnderGraduationFormFields = () => {
        this.setState({ fieldsCount: this.state.fieldsCount - 1 });
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        
                        <div>
                            <div className="d-flex">
                                <input type="checkbox" checked={this.state.isPFAvailable} onChange={this.onChangeField} name="PF-available" onClick={() => this.onChangeField}></input>
                                <label className="ps-3 mt-auto mb-auto">Do you have PF in past companies</label>
                            </div>
                        </div>
                        {!this.state.isPFAvailable ? <div>
                            {Array.from({ length: this.state.underGraduationFieldsCount }, (_, i) => (
                                <div className="d-flex">
                                    <div className="d-flex" key={i}>
                                        <div className="px-2">
                                            <label className="mt-auto mb-auto pe-3">Company Name</label>
                                            <input type="text" onChange={this.props.onChangeEMPField} name={`start-year-${i}`} />
                                        </div>

                                        <div className="px-2">
                                            <label className="mt-auto mb-auto pe-3">Start year</label>
                                            <input type="date" onChange={this.props.onChangeEMPField} name={`start-year-${i}`} />
                                        </div>
                                        <div className="px-2">
                                            <label className="mt-auto mb-auto pe-3">End year</label>
                                            <input type="date" onChange={this.props.onChangeEMPField} name={`end-year-${i}`} />
                                        </div>
                                        <div className="px-2">
                                            <label className="mt-auto mb-auto pe-3">Certificate</label>
                                            <input type="file" onChange={this.props.onChangeEMPField} name={`certificate-${i}`} className="form-control w-auto" />
                                        </div>
                                    </div>
                                    <i className="px-1 bi bi-plus-circle mt-auto mb-2 cursor-pointer" onClick={this.addUnderGraduationFormFields}></i>
                                    <i className="px-1 bi bi-trash3  mt-auto mb-2 cursor-pointer" onClick={this.removeUnderGraduationFormFields}></i>
                                </div>
                            ))}
                        </div>

                            : <div>
                                <label>UAN Number</label>
                                <div className="d-flex">
                                    <input value={this.state.candidate.UAN} type="text" onChange={this.onChangeField} name="uan-number"></input>
                                    {!this.state.isUANVerified && this.state.candidate.UAN?.toString()?.length === 10 && <div>  {this.state.isUANLoader && !this.state.isUANVerified ? <div> <LoaderComponent /> </div> : <button className="btn btn-otp ms-2" onClick={(e) => { e.preventDefault(); this.setState({ showUANOtpField: true }) }}>Send OTP</button>} </div>}
                                    {this.state.isUANVerified && < i className="bi bi-check-circle-fill verified-btn ps-2"></i>}
                                </div>
                                {!this.state.isUANVerified && this.state.showUANOtpField && < div >
                                    <label>OTP</label>
                                    <div className="d-flex">
                                        <input type="text" name="uan-otp" value={this.state.candidate.UANOtp} onChange={this.onChangeField}></input>
                                        {this.state.candidate.UANOtp?.toString()?.length === 6 && <button className="btn btn-otp ms-2" onClick={(e) => { this.verifyUAN(e) }}>Verify OTP</button>}
                                    </div>
                                </div>}


                            </div>}
                    </div>
                </div>
               
            </>
        )
    }
}

export default EmploymentFormComponent;