import CardWithTitle from "../../../ui/Card/CardWithTitle";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { WorkExperienceType } from "../../../utils/type";
import profile_work_experience from "../../../assets/profile_work_experience.svg";
import ProfileWorkExperience from "../ui/ProfileWorkExperience";

type Props = { workExperienceList: WorkExperienceType[] };

export default function WorkExperience({ workExperienceList }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.workExperience.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.workExperience.description}
      icon={profile_work_experience}
    >
      {workExperienceList.map(
        (workExperience: WorkExperienceType, index: number) => (
          <ProfileWorkExperience
            key={`work-experience-${index}`}
            position={workExperience.position}
            company={workExperience.company}
            start_date={workExperience.start_date}
            end_date={workExperience.end_date}
            responsibilities={workExperience.responsibilities}
          />
        )
      )}
    </CardWithTitle>
  );
}
