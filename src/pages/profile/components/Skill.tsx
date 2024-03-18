import CardWithTitle from "../../../ui/Card/CardWithTitle";
import ProfileSkills from "../../../ui/Profile/ProfileSkills";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { SkillType } from "../../../utils/type";
import profile_skills from "../../../assets/profile_skills.svg";

type Props = { skills: SkillType };

export default function Skill({ skills }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.skills.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.skills.description}
      icon={profile_skills}
    >
      {Boolean(
        skills.beginner?.length &&
          skills.intermediate?.length &&
          skills.excellent?.length
      ) && <ProfileSkills skills={skills} />}
    </CardWithTitle>
  );
}
