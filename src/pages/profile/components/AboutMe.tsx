import React from "react";
import CardWithTitle from "../../../ui/Card/CardWithTitle";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";

type Props = { aboutMeDescription: string };

export default function AboutMe({ aboutMeDescription }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.aboutMe.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.aboutMe.description}
      icon={PROFILE_DATA_CATEGORY.aboutMe.icon}
    >
      <div>
        <p>{aboutMeDescription}</p>
      </div>
    </CardWithTitle>
  );
}
