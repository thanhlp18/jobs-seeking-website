import CardWithTitle from "../../../ui/Card/CardWithTitle";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { SkillType } from "../../../utils/type";
import profile_skills from "../../../assets/profile_skills.svg";
import SkillsWrapper from "./SkillsWrapper";

type Props = { skills: SkillType };

export default function Skill({ skills }: Props) {
  console.log(skills, "skills");
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
      ) && <SkillsWrapper skills={skills} />}
    </CardWithTitle>
  );
}
