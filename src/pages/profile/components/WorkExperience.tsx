import React from "react";
import { WorkExperienceType } from "../../../utils/type";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import CardWithTitle from "../../../ui/Card/CardWithTitle";
import ProfileWorkExperience from "../../../ui/Profile/ProfileWorkExperience";

type Props = { workExperienceList: WorkExperienceType[] };

export default function WorkExperience({ workExperienceList }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.workExperience.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.workExperience.description}
      icon={PROFILE_DATA_CATEGORY.workExperience.icon}
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
