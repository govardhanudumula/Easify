import React from 'react';
import { ICandidateFormData } from '../../../../Interfaces/ICandidate';

export interface IFresherFormProps {
    candidate: ICandidateFormData;
    onChangeField: any;
}

export interface IFresherFormState {
    hasInternship: boolean;
}
class FresherFormComponent extends React.Component<IFresherFormProps, IFresherFormState>{

    constructor(props: IFresherFormProps) {
        super(props);

        this.state = {
            hasInternship:false
        }
    }
    render() {
        return (
            <>
                <div>
                    <div className="d-flex">
                        <label className="mt-auto mb-auto pe-3">Do you have any internship experience?</label>
                        <div className="d-flex">
                        <input type="checkbox" onChange={this.props.onChangeField} name="aadhar-number"></input>
                            <label className="ms-2 mt-auto mb-auto">Yes</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex">
                        <label className="mt-auto mb-auto pe-3">Latest </label>
                        <div className="d-flex">
                            <input type="checkbox" onChange={this.props.onChangeField} name="aadhar-number"></input>
                            <label className="ms-2 mt-auto mb-auto">Yes</label>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FresherFormComponent;