import React from 'react';
import './Form.scss';
import ICandidate, { ICandidateFormData } from '../../../Interfaces/ICandidate';

export interface IFormProps {

}
export interface IFormState {
    active: number;
    candidate: ICandidateFormData;
    showOTPField: boolean;
    isAadharVerified: boolean;
}
class FormComponent extends React.Component<IFormProps, IFormState> {

    nextButton: HTMLButtonElement | null = null;
    prevButton: HTMLButtonElement | null = null;
    steps: NodeListOf<Element> | null = null;
    form_steps: NodeListOf<Element> | null = null;

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            active: 1,
            candidate: {} as ICandidateFormData,
            showOTPField: false,
            isAadharVerified:false
        };
    }

    componentDidMount() {
        this.nextButton = document.querySelector('.btn-next');
        this.prevButton = document.querySelector('.btn-prev');
        this.steps = document.querySelectorAll('.step');
        this.form_steps = document.querySelectorAll('.form-step');

        if (this.nextButton) {
            this.nextButton.disabled = false;
        }
        this.nextButton?.addEventListener('click', this.handleNext);
        this.prevButton?.addEventListener('click', this.handlePrevious);
    }

    handleNext = () => {
        this.setState(prevState => ({
            active: Math.min(prevState.active + 1, (this.steps && this.steps.length) || 1)
        }), () => {
            this.updateProgress();
        });
    }

    handlePrevious = () => {
        this.setState(prevState => ({
            active: Math.max(prevState.active - 1, 1)
        }), () => {
            this.updateProgress();
        });
    }

    updateProgress() {
        if (this.steps && this.form_steps) {
            this.steps.forEach((step, i) => {
                if (i === (this.state.active - 1)) {
                    step.classList.add('active');
                    if (this.form_steps !== null) {
                        this.form_steps[i]?.classList.add('active');
                    }
                } else {
                    step.classList.remove('active');
                    if (this.form_steps !== null) {
                        this.form_steps[i]?.classList.remove('active');
                    }
                }
            });

            if (this.prevButton && this.nextButton) {
                this.prevButton.disabled = this.state.active === 1;
                this.nextButton.disabled = this.state.active === (this.steps.length || 1);
            }
        }
    }

    onChangeField = (event: any) => {
        var details = this.state.candidate;
        var re = /^[0-9\\b]+$/;
        if (event.target?.name === "aadhar-number" && (re.test(event?.target?.value) || event?.target?.value==='')) {
            details.AadharNumber = event.target?.value;
        }
        if (event.target?.name === "aadhar-otp" && (re.test(event?.target?.value) || event?.target?.value === '') && event?.target?.value?.length<7) {
            details.AadharOtp = event.target?.value;
        }
        this.setState({ candidate: details });
    }

    render() {
        return (
            <div className="h-100">
                <div className="form-container d-flex p-4 h-100">
                    <div className="progress-container">
                        <ul className="progress-steps">
                            <li className="step active">
                                <span>1</span>
                                <p>Aadhar<br /><span>Personal information</span></p>
                            </li>
                            <li className="step">
                                <span>2</span>
                                <p>Experience<br /><span>Experience details</span></p>
                            </li>
                            <li className="step">
                                <span>3</span>
                                <p>Educational<br /><span>Educational details</span></p>
                            </li>
                        </ul>
                    </div>
                    <form className="">
                        <div className={`form-one form-step ${this.state.active === 1 ? 'active' : ''}`}>
                            <div className="bg-svg"></div>
                            <h2>Personal Details</h2>
                            <p>Verify your personal details here</p>
                            <div>
                                <label>Aadhar Number</label>
                                <div className="d-flex">
                                    <input value={this.state.candidate.AadharNumber} type="text" onChange={this.onChangeField} name="aadhar-number"></input>
                                    {!this.state.isAadharVerified && this.state.candidate.AadharNumber?.toString()?.length === 12 && <button className="btn btn-otp ms-2" onClick={(e) => { e.preventDefault(); this.setState({ showOTPField: true }) }}>Send OTP</button>}
                                    {this.state.isAadharVerified && < i className="bi bi-check-circle-fill verified-btn ps-2"></i>}
                                </div>
                            </div>
                            {!this.state.isAadharVerified && this.state.showOTPField && < div >
                                <label>OTP</label>
                                <div className="d-flex">
                                    <input type="text" name="aadhar-otp" value={this.state.candidate.AadharOtp} onChange={this.onChangeField}></input>
                                    {this.state.candidate.AadharOtp?.toString()?.length === 6 && <button className="btn btn-otp ms-2" onClick={(e) => { e.preventDefault(); this.setState({ isAadharVerified:true }) }}>Verify OTP</button>}
                                </div>
                            </div>}
                            <div>
                                <label>PAN Number</label>
                                <div className="d-flex">
                                    <input value={this.state.candidate.AadharNumber} type="text" onChange={this.onChangeField} name="pan-number"></input>
                                    {!this.state.isAadharVerified && this.state.candidate.AadharNumber?.toString()?.length === 12 && <button className="btn btn-otp ms-2" onClick={(e) => { e.preventDefault(); this.setState({ showOTPField: true }) }}>Send OTP</button>}
                                    {this.state.isAadharVerified && < i className="bi bi-check-circle-fill verified-btn ps-2"></i>}
                                </div>
                            </div>
                            {!this.state.isAadharVerified && this.state.showOTPField && < div >
                                <label>OTP</label>
                                <div className="d-flex">
                                    <input type="text" name="aadhar-otp" value={this.state.candidate.AadharOtp} onChange={this.onChangeField}></input>
                                    {this.state.candidate.AadharOtp?.toString()?.length === 6 && <button className="btn btn-otp ms-2" onClick={(e) => { e.preventDefault(); this.setState({ isAadharVerified: true }) }}>Verify OTP</button>}
                                </div>
                            </div>}
                        </div>
                        <div className={`form-two form-step ${this.state.active === 2 ? 'active' : ''}`}>
                            <div className="bg-svg"></div>
                            <h2>Experience Details</h2>
                            <p>Please enter the experience details carefully!</p>
                            <div>
                                <label>Aadhar Number</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label>Aadhar Number</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label>Aadhar Number</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className={`form-three form-step ${this.state.active === 3 ? 'active' : ''}`}>
                            <div className="bg-svg"></div>
                            <h2>Personal Information</h2>
                            <p>Please enter you educational details carefully!</p>
                            <div>
                                <label>Aadhar Number</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label>Aadhar Number</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label>Aadhar Number</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn-prev">Back</button>
                            <button type="button" className="btn-next">Next Step</button>
                            <button type="button" className="btn-submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormComponent;