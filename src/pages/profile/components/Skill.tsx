import React from "react";
import CardWithTitle from "../../../ui/Card/CardWithTitle";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { SkillType } from "../../../utils/type";
import ProfileSkills from "../../../ui/Profile/ProfileSkills";

type Props = { skills: SkillType };

export default function Skill({ skills }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.skills.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.skills.description}
      icon={PROFILE_DATA_CATEGORY.skills.icon}
    >
      {Boolean(
        skills.beginner?.length &&
          skills.intermediate?.length &&
          skills.excellent?.length
      ) && <ProfileSkills skills={skills} />}
    </CardWithTitle>
  );
}
