import ICandidate from "../Interfaces/ICandidate";
import { ICandidateDetails } from "../Interfaces/ICandidate";

const Candidates: ICandidate[] = [
    {
        fullname: "Gowtham",
        gmail: "gowtham@gmail.com",
        designation: "Senior Software Engineer",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Sneha Patil",
        gmail: "sneha.patil@gmail.com",
        designation: "Frontend Developer",
        experiencetype: "Fresher",
        verificationstatus: "pending",
    },
    {
        fullname: "Rajesh Kumar",
        gmail: "rajesh.kumar@gmail.com",
        designation: "Data Scientist",
        experiencetype: "Experienced",
        verificationstatus: "email sent",
    },
    {
        fullname: "Priya Singh",
        gmail: "priya.singh@gmail.com",
        designation: "Full Stack Developer",
        experiencetype: "Experienced",
        verificationstatus: "pending",
    },
    {
        fullname: "Vikas Rao",
        gmail: "vikas.rao@gmail.com",
        designation: "Backend Developer",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Anjali Verma",
        gmail: "anjali.verma@gmail.com",
        designation: "DevOps Engineer",
        experiencetype: "Experienced",
        verificationstatus: "email sent",
    },
    {
        fullname: "Rohit Gupta",
        gmail: "rohit.gupta@gmail.com",
        designation: "Junior Web Developer",
        experiencetype: "Fresher",
        verificationstatus: "verified",
    },
    {
        fullname: "Sanjay Mishra",
        gmail: "sanjay.mishra@gmail.com",
        designation: "System Administrator",
        experiencetype: "Experienced",
        verificationstatus: "pending",
    },
    {
        fullname: "Pooja Malhotra",
        gmail: "pooja.malhotra@gmail.com",
        designation: "IT Technician",
        experiencetype: "Fresher",
        verificationstatus: "verified",
    },
    {
        fullname: "Manish Kumar",
        gmail: "manish.kumar@gmail.com",
        designation: "Database Administrator",
        experiencetype: "Experienced",
        verificationstatus: "email sent",
    },
    {
        fullname: "Shreya Pandey",
        gmail: "shreya.pandey@gmail.com",
        designation: "Technical Support Specialist",
        experiencetype: "Fresher",
        verificationstatus: "verified",
    },
    {
        fullname: "Arjun Yadav",
        gmail: "arjun.yadav@gmail.com",
        designation: "Software Tester",
        experiencetype: "Fresher",
        verificationstatus: "pending",
    }
]

const CandidateDetails:ICandidateDetails[] = [
    {
        Candidate:{
            fullname: "Gowtham",
            gmail: "gowtham@gmail.com",
            designation: "Senior Software Engineer",
            experiencetype: "Experienced",
            verificationstatus: "verified",
        },
        PersonalDetails:{
            AadharNumber:70309965505,
            AadharVerifyStatus:true,
            PanNumber:"DJMNP1028L",
            PanVerifyStatus:true,
            UanNumber:1020220375,
            UanVerifyStatus:true,
            Status:true,
        },
        EducationDetails:[
            {
                CollegeName: "Rgukt College",
                EducationType: "Bachelor's Degree",
                Stream: "Computer Science",
                JoiningYear: 2015,
                PassoutYear: 2019,
                Document: "marksheet.pdf",
                Status: true
            },
            {
                CollegeName: "Rgukt College",
                EducationType: "PUC",
                Stream: "MPC",
                JoiningYear: 2013,
                PassoutYear: 2015,
                Document: "marksheet.pdf",
                Status: true
            },
            {
                CollegeName: "BSR MPL",
                EducationType: "Schooling",
                Stream: "Class X",
                JoiningYear: 2012,
                PassoutYear: 2013,
                Document: "marksheet.pdf",
                Status: true
            }
        ],
        ExperienceDetails:[
            {
                CompanyName: "Tech Solutions Inc.",
                WebsiteUrl: "https://www.techsolutions.com",
                DOJ: "2019-07-01",
                DOE: "2022-06-30",
                Experience: "3 years",
                Document:"document.pdf",
                Status: true
            }
        ]
    }
]


localStorage.setItem("candidates",JSON.stringify(Candidates));
localStorage.setItem("candidatesDetails",JSON.stringify(CandidateDetails));

export function getCandidates():ICandidate[]
{
    var candidates:ICandidate[];
    let candidatesKey:(string|null) = localStorage.getItem('candidates');
    if(candidatesKey)
    {
        candidates = JSON.parse(candidatesKey);
    }
    else
    {
        candidates=[];
        localStorage.setItem('candidates',JSON.stringify(candidates));
    }
    return candidates;
}

export function getPendingCandidate():ICandidate[]
{
    const candidates = getCandidates().filter((candidate)=>
        (candidate.verificationstatus==='pending' || candidate.verificationstatus==="email sent")
     ,[])
    return candidates;
}

export function getVerifiedCandidates():ICandidate[]
{
    const candidates = getCandidates().filter((candidate)=>
        (candidate.verificationstatus==='verified')
     ,[])
    return candidates;
}

export function getDesignations():string[]
{
    const designation:string[] =Array.from(new Set(getCandidates().map((candidate) => candidate.designation)));
    console.log(designation);
    return  designation;
}

export function AddCandidate(candidate:ICandidate)
{
    var candidates = getCandidates();
    candidates.unshift(candidate)
    localStorage.setItem('candidates',JSON.stringify(candidates));
}

export function getCandidateBygmail(gmail:string):ICandidateDetails
{
    const candidateDtails:ICandidateDetails[]=CandidateDetails.filter(candidate=>candidate.Candidate.gmail===gmail)
    return candidateDtails[0];
}
