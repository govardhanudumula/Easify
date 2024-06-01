interface ICandidate
{
    fullname:string,
    gmail:string,
    designation:string,
    experiencetype:string,
    verificationstatus:string
}
export default ICandidate;

export interface ICandidateFormData{
    AadharNumber: number;
    AadharOtp: number;
    PanNumber: number;
    PanOtp: number;

}
export interface ICandidatePersonalInfo
{
    AadharNumber:number,
    AadharVerifyStatus:boolean,
    PanNumber:string,
    PanVerifyStatus:boolean,
    UanNumber:number,
    UanVerifyStatus:boolean
    Status:boolean
}
export interface ICandidateEducation
{
    CollegeName:string,
    EducationType:String,
    Stream:string,
    JoiningYear:number,
    PassoutYear:number,
    Document:string,
    Status:boolean
}
export interface ICandidateExperience
{
    CompanyName:string,
    WebsiteUrl:string,
    DOJ:string,
    DOE:string,
    Experience:string,
    Document:string,
    Status:boolean
}

export interface ICandidateDetails
{
    Candidate:ICandidate,
    PersonalDetails:ICandidatePersonalInfo,
    EducationDetails:ICandidateEducation[],
    ExperienceDetails:ICandidateExperience[]
}