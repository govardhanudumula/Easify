import React from 'react';
import { ICandidateFormData } from '../../../../Interfaces/ICandidate';
import './FresherForm.scss';
export interface IFresherFormProps {
    candidate: ICandidateFormData;
    onChangeField: any;
}

export interface IFresherFormState {
    hasInternship: boolean;
    fieldsCount: number;
}
class FresherFormComponent extends React.Component<IFresherFormProps, IFresherFormState>{

    constructor(props: IFresherFormProps) {
        super(props);

        this.state = {
            hasInternship: false,
            fieldsCount:1
        }
    }

    addFormFields = () => {
        this.setState({ fieldsCount: this.state.fieldsCount + 1 });
    }

    removeFormFields = () => {
        this.setState({ fieldsCount: this.state.fieldsCount - 1 });
    }
    render() {
        return (
            <>
                <div>
                    <div className="d-flex">
                        <label className="mt-auto mb-auto pe-3">Do you have any internship experience?</label>
                        <div className="d-flex">
                            <input type="checkbox" onChange={this.props.onChangeField} name="aadhar-number" onClick={() => { this.setState({ hasInternship: !this.state.hasInternship }) }}></input>
                            <label className="ms-2 mt-auto mb-auto">Yes</label>
                        </div>
                    </div>
                </div>
                {this.state.hasInternship && <div>
                    {Array.from({ length: this.state.fieldsCount }, (_, i) => (
                        <div className="d-flex">

                            <div className="d-flex" key={i}>
                                <div>
                                    <label className="mt-auto mb-auto pe-3">Company name </label>
                                    <input type="text" onChange={this.props.onChangeField} name={`company-name-${i}`} />
                                </div>
                                <div className="px-2">
                                    <label className="mt-auto mb-auto pe-3">Start year</label>
                                    <input type="date" onChange={this.props.onChangeField} name={`start-year-${i}`} />
                                </div>
                                <div className="px-2">
                                    <label className="mt-auto mb-auto pe-3">End year</label>
                                    <input type="date" onChange={this.props.onChangeField} name={`end-year-${i}`} />
                                </div>
                                <div className="px-2">
                                    <label className="mt-auto mb-auto pe-3">Certificate</label>
                                    <input type="file" onChange={this.props.onChangeField} name={`certificate-${i}`} className="form-control w-auto" />
                                </div>
                            </div>
                            <i className="px-1 bi bi-plus-circle mt-auto mb-2 cursor-pointer" onClick={this.addFormFields}></i>
                            <i className="px-1 bi bi-trash3  mt-auto mb-2 cursor-pointer" onClick={this.removeFormFields}></i>
                        </div>
                    ))}

                </div>
                }
           </>
        )
    }
}

export default FresherFormComponent;