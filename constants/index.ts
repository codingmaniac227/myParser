export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Netflix",
        jobTitle: "Full Stack Engineer",
        imagePath: "/images/resume-4.png",
        resumePath: "/resumes/resume-4.pdf",
        feedback: {
            overallScore: 92,
            ATS: {
                score: 95,
                tips: [],
            },
            toneAndStyle: {
                score: 88,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 87,
                tips: [],
            },
            skills: {
                score: 93,
                tips: [],
            },
        },
    },
    {
        id: "2",
        companyName: "Shopify",
        jobTitle: "Backend Developer",
        imagePath: "/images/resume-5.png",
        resumePath: "/resumes/resume-5.pdf",
        feedback: {
            overallScore: 68,
            ATS: {
                score: 72,
                tips: [],
            },
            toneAndStyle: {
                score: 65,
                tips: [],
            },
            content: {
                score: 70,
                tips: [],
            },
            structure: {
                score: 62,
                tips: [],
            },
            skills: {
                score: 71,
                tips: [],
            },
        },
    },
    {
        id: "3",
        companyName: "Spotify",
        jobTitle: "Frontend Engineer",
        imagePath: "/images/resume-6.png",
        resumePath: "/resumes/resume-6.pdf",
        feedback: {
            overallScore: 80,
            ATS: {
                score: 85,
                tips: [],
            },
            toneAndStyle: {
                score: 77,
                tips: [],
            },
            content: {
                score: 79,
                tips: [],
            },
            structure: {
                score: 82,
                tips: [],
            },
            skills: {
                score: 81,
                tips: [],
            },
        },
    },
]

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
                                        jobTitle,
                                        jobDescription,
                                        AIResponseFormat,
                                    }: {
    jobTitle: string;
    jobDescription: string;
    AIResponseFormat: string;
}) =>
    `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`;