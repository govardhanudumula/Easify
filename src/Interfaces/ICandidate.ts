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
interface ICandidatePersonalInfo
{
    AadharNumber:number,
    AadharVerifyStatus:boolean,
    PanNumber:string,
    PanVerifyStatus:boolean,
    UanNumber:number,
    UanVerifyStatus:boolean
}
interface ICandidateEducation
{
    CollegeName:string,
    EducationType:String,
    Stream:string,
    JoiningYear:number,
    PassoutYear:number,
    Documnet:string,
    Status:boolean
}
interface ICandidateExperience
{
    CompanyName:string,
    WebsiteUrl:string,
    DOJ:any,
    DOE:any,
    Experience:string,
    Status:boolean
}

interface ICandidateDetails
{
    Candidate:ICandidate,
    PersonalDetails:ICandidatePersonalInfo,
    EducationDetails:ICandidateEducation[],
    ExperienceDetails:ICandidateExperience[]
}