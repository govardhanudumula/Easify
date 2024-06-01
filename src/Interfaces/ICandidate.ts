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