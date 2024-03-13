import {
  Award,
  Certificate,
  PersonalProject,
  ProfileDataForCV,
  WorkExperience,
} from "../../utils/type";
import ProfileAward from "./ProfileAward";
import ProfileCertificate from "./ProfileCertificate";
import ProfileEducation from "./ProfileEducation";
import ProfilePersonalProject from "./ProfilePersonalProject";
import ProfileSkills from "./ProfileSkills";
import ProfileWorkExperience from "./ProfileWorkExperience";

type Props = {
  ProfileData: ProfileDataForCV;
  sectionKey: string;
};

export default function ProfileCV({ ProfileData, sectionKey }: Props) {
  switch (sectionKey) {
    case "about-me":
      return (
        <div>
          <p>{ProfileData.aboutMe}</p>
        </div>
      );
    case "education":
      return ProfileData.education.map((education, index) => (
        <ProfileEducation
          key={`education-${index}`}
          degree={education.degree}
          institution={education.institution}
          duration={education.duration}
          additionalDetail={education.additionalDetail}
        />
      ));
    case "work-experience":
      return ProfileData.workExperience.map(
        (workExperience: WorkExperience, index: number) => (
          <ProfileWorkExperience
            key={`work-experience-${index}`}
            position={workExperience.position}
            company={workExperience.company}
            duration={workExperience.duration}
            responsibilities={workExperience.responsibilities}
          />
        )
      );
    case "skills":
      return <ProfileSkills skills={ProfileData.skills} />;
    case "personal-project":
      return ProfileData.personalProjects.map(
        (project: PersonalProject, index: number) => (
          <ProfilePersonalProject
            project={project}
            type="personal-project"
            key={`project-${index}`}
          />
        )
      );

    case "certificates":
      return ProfileData.certificates.map(
        (certificate: Certificate, index: number) => (
          <ProfileCertificate
            certificate={certificate}
            key={`certificate-${index}`}
          />
        )
      );

    case "awards":
      return ProfileData.awards.map((award: Award, index: number) => (
        <ProfileAward award={award} key={`award-${index}`} />
      ));
    default:
      return null;
  }
}
