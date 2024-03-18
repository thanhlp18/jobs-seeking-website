import CardWithTitle from "../../../ui/Card/CardWithTitle";
import ProfilePersonalProject from "../../../ui/Profile/ProfilePersonalProject";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { PersonalProjectType } from "../../../utils/type";

type Props = { personalProjectList: PersonalProjectType[] };

export default function PersonalProject({ personalProjectList }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.personalProjects.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.personalProjects.description}
      icon={PROFILE_DATA_CATEGORY.personalProjects.icon}
    >
      {personalProjectList.map(
        (project: PersonalProjectType, index: number) => (
          <ProfilePersonalProject
            project={project}
            type="personal-project"
            key={`project-${index}`}
          />
        )
      )}
    </CardWithTitle>
  );
}
