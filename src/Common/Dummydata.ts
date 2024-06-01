import ICandidate from "../Interfaces/ICandidate";

const Candidates: ICandidate[] = [
    {
        fullname: "Tony Stark",
        gmail: "tonystark@gmail.com",
        designation: "Senior Software Engineer",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Steve Rogers",
        gmail: "steverogers@gmail.com",
        designation: "Frontend Developer",
        experiencetype: "Fresher",
        verificationstatus: "pending",
    },
    {
        fullname: "Bruce Banner",
        gmail: "brucebanner@gmail.com",
        designation: "Data Scientist",
        experiencetype: "Experienced",
        verificationstatus: "email sent",
    },
    {
        fullname: "Natasha Romanoff",
        gmail: "natasharomanoff@gmail.com",
        designation: "Full Stack Developer",
        experiencetype: "Experienced",
        verificationstatus: "pending",
    },
    {
        fullname: "Clint Barton",
        gmail: "clintbarton@gmail.com",
        designation: "Backend Developer",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Thor Odinson",
        gmail: "thorodinson@gmail.com",
        designation: "DevOps Engineer",
        experiencetype: "Experienced",
        verificationstatus: "pending",
    },
    {
        fullname: "Peter Parker",
        gmail: "peterparker@gmail.com",
        designation: "Junior Web Developer",
        experiencetype: "Fresher",
        verificationstatus: "verified",
    },
    {
        fullname: "Wanda Maximoff",
        gmail: "wandamaximoff@gmail.com",
        designation: "Software Engineer",
        experiencetype: "Fresher",
        verificationstatus: "email sent",
    },
    {
        fullname: "Stephen Strange",
        gmail: "stephenstrange@gmail.com",
        designation: "Cloud Engineer",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Sam Wilson",
        gmail: "samwilson@gmail.com",
        designation: "IT Support Specialist",
        experiencetype: "Fresher",
        verificationstatus: "pending",
    },
    {
        fullname: "Bucky Barnes",
        gmail: "buckybarnes@gmail.com",
        designation: "Cybersecurity Analyst",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Carol Danvers",
        gmail: "caroldanvers@gmail.com",
        designation: "Network Engineer",
        experiencetype: "Experienced",
        verificationstatus: "email sent",
    },
    {
        fullname: "T'Challa",
        gmail: "tchalla@gmail.com",
        designation: "System Administrator",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Scott Lang",
        gmail: "scottlang@gmail.com",
        designation: "IT Technician",
        experiencetype: "Fresher",
        verificationstatus: "pending",
    },
    {
        fullname: "Gamora",
        gmail: "gamora@gmail.com",
        designation: "Database Administrator",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Drax",
        gmail: "drax@gmail.com",
        designation: "Technical Support Specialist",
        experiencetype: "Fresher",
        verificationstatus: "pending",
    },
    {
        fullname: "Rocket Raccoon",
        gmail: "rocket@gmail.com",
        designation: "Software Tester",
        experiencetype: "Fresher",
        verificationstatus: "email sent",
    },
    {
        fullname: "Groot",
        gmail: "groot@gmail.com",
        designation: "System Analyst",
        experiencetype: "Experienced",
        verificationstatus: "pending",
    },
    {
        fullname: "Nebula",
        gmail: "nebula@gmail.com",
        designation: "Project Manager",
        experiencetype: "Experienced",
        verificationstatus: "verified",
    },
    {
        fullname: "Loki",
        gmail: "loki@gmail.com",
        designation: "Product Manager",
        experiencetype: "Experienced",
        verificationstatus: "pending",
    }
];

localStorage.setItem("candidates",JSON.stringify(Candidates));

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
