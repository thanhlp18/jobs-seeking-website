import CardWithTitle from "../../../ui/Card/CardWithTitle";
import ProfileEducation from "../../../ui/Profile/ProfileEducation";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { EducationType } from "../../../utils/type";

type Props = {
  educationList: EducationType[];
};

export const Education = ({ educationList }: Props) => {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.education.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.education.description}
      icon={PROFILE_DATA_CATEGORY.education.icon}
    >
      {educationList.map((education, index) => (
        <ProfileEducation
          key={`education-${index}`}
          degree={education.degree}
          institution={education.institution}
          start_date={education.start_date}
          end_date={education.end_date}
          additionalDetail={education.additionalDetail}
        />
      ))}
    </CardWithTitle>
  );
};
