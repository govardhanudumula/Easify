import React from 'react';
import { ICandidateFormData } from '../../../../Interfaces/ICandidate';
export interface IEducationFormProps {
    candidate: ICandidateFormData;
    onChangeField: any;
}
export interface IEducationFormState {
    fieldsCount: number;
    underGraduationFieldsCount: number;
}
class EducationFormComponent extends React.Component<IEducationFormProps, IEducationFormState>{

    constructor(props: IEducationFormProps) {
        super(props);

        this.state = {
            fieldsCount: 1,
            underGraduationFieldsCount: 1
        }
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
                        <h4 className="fw-bold">Under graduation</h4>
                        {Array.from({ length: this.state.underGraduationFieldsCount }, (_, i) => (
                            <div className="d-flex">
                                <div className="d-flex" key={i}>
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
                                <i className="px-1 bi bi-plus-circle mt-auto mb-2 cursor-pointer" onClick={this.addUnderGraduationFormFields}></i>
                                <i className="px-1 bi bi-trash3  mt-auto mb-2 cursor-pointer" onClick={this.removeUnderGraduationFormFields}></i>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4">
                        <h4 className="fw-bold">School</h4>
                        {Array.from({ length: this.state.fieldsCount }, (_, i) => (
                            <div className="d-flex">
                                <div className="d-flex" key={i}>
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
                </div>

            </>
        )
    }
}

export default EducationFormComponent;