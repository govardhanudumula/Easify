import React from 'react';
import './Form.scss';
import ICandidate, { ICandidateFormData } from '../../../Interfaces/ICandidate';
import FresherFormComponent from './FresherForm/FresherForm';
import LoaderComponent from '../../../Common/Loader/Loader';
import EmploymentFormComponent from './ExperiencedForm/EmploymentDetails';

export interface IFormProps {

}
export interface IFormState {
    active: number;
    candidate: ICandidateFormData;
    showOTPField: boolean;
    isAadharVerified: boolean;
    showPanOtpField: boolean;
    isPanVerified: boolean;
    isAadarLoader: boolean;
    isPANLoader: boolean;
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
            isAadharVerified: false,
            showPanOtpField: false,
            isPanVerified: false,
            isAadarLoader: false,
            isPANLoader:false,
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
        if (event.target?.name === "aadhar-number" && (re.test(event?.target?.value) || event?.target?.value === '') && event?.target?.value?.length < 13) {
            details.AadharNumber = event.target?.value;
        }
        if (event.target?.name === "aadhar-otp" && (re.test(event?.target?.value) || event?.target?.value === '') && event?.target?.value?.length<7) {
            details.AadharOtp = event.target?.value;
        }
        if (event.target?.name === "pan-number" && (re.test(event?.target?.value) || event?.target?.value === '') && event?.target?.value?.length < 11) {
            details.PanNumber = event.target?.value;
        }
        if (event.target?.name === "pan-otp" && (re.test(event?.target?.value) || event?.target?.value === '') && event?.target?.value?.length < 7) {
            details.PanOtp = event.target?.value;
        }
        if (event.target?.name === "experience") {
            details.IsExperienced = !this.state.candidate.IsExperienced;
        }
        this.setState({ candidate: details });
    }

    verifyAadar(e:any) {
        e.preventDefault();
        this.setState({isAadarLoader:true})
        setTimeout(() => {
            this.setState({ isAadharVerified: true })
        },5000)
        
    }

    verifyPAN(e: any) {
        e.preventDefault();
        this.setState({ isPANLoader: true })
        setTimeout(() => {
            this.setState({ isPanVerified: true })
        },5000)
       
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
                                <p>Employment<br /><span>Employment Information</span></p>
                            </li>
                            <li className="step">
                                <span>3</span>
                                <p>Education<br /><span>Educational Information</span></p>
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
                                    {!this.state.isAadharVerified && this.state.candidate.AadharNumber?.toString()?.length === 12 && <div>{this.state.isAadarLoader && !this.state.isAadharVerified ? <div> <LoaderComponent /> </div> : <button className="btn btn-otp ms-2" onClick={(e) => { e.preventDefault(); this.setState({ showOTPField: true }) }}>Send OTP</button>} </div>}
                                    {this.state.isAadharVerified && < i className="bi bi-check-circle-fill verified-btn ps-2"></i>}
                                </div>
                            </div>
                            {!this.state.isAadharVerified && this.state.showOTPField && < div >
                                <label>OTP</label>
                                <div className="d-flex">
                                    <input type="text" name="aadhar-otp" value={this.state.candidate.AadharOtp} onChange={this.onChangeField}></input>
                                    {this.state.candidate.AadharOtp?.toString()?.length === 6 && <button className="btn btn-otp ms-2" onClick={(e) => { this.verifyAadar(e) }}>Verify OTP</button>}
                                            
                                    

                                </div>
                            </div>}
                            <div>
                                <label>PAN Number</label>
                                <div className="d-flex">
                                    <input value={this.state.candidate.PanNumber} type="text" onChange={this.onChangeField} name="pan-number"></input>
                                    {!this.state.isPanVerified && this.state.candidate.PanNumber?.toString()?.length === 10 && <div>  {this.state.isPANLoader && !this.state.isPanVerified ? <div> <LoaderComponent /> </div> : <button className="btn btn-otp ms-2" onClick={(e) => { e.preventDefault(); this.setState({ showPanOtpField: true }) }}>Send OTP</button>} </div>}
                                    {this.state.isPanVerified && < i className="bi bi-check-circle-fill verified-btn ps-2"></i>}
                                </div>
                            </div>
                            {!this.state.isPanVerified && this.state.showPanOtpField && < div >
                                <label>OTP</label>
                                <div className="d-flex">
                                    <input type="text" name="pan-otp" value={this.state.candidate.PanOtp} onChange={this.onChangeField}></input>
                                    {this.state.candidate.PanOtp?.toString()?.length === 6 &&  <button className="btn btn-otp ms-2" onClick={(e) => { this.verifyPAN(e) }}>Verify OTP</button>}
                                </div>
                            </div>}
                            <div>
                                <div className="d-flex">
                                    <input type="checkbox" onChange={this.onChangeField} name="experience" onClick={() => this.onChangeField}></input>
                                    <label className="ps-3 mt-auto mb-auto">I'm experienced</label>
                                </div>
                            </div>
                        </div>
                        <div className={`form-two form-step ${this.state.active === 2 ? 'active' : ''}`}>
                            <div className="bg-svg"></div>
                            <h2>Employment Information</h2>
                            <p>Please enter the employment details carefully!</p>
                            {!this.state.candidate.IsExperienced ? <FresherFormComponent candidate={this.state.candidate} onChangeField={this.onChangeField} /> :<EmploymentFormComponent />}
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