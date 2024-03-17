import React from "react";
import { AwardType } from "../../../utils/type";
import ProfileAward from "../../../ui/Profile/ProfileAward";
import CardWithTitle from "../../../ui/Card/CardWithTitle";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";

type Props = { awardList: AwardType[] };

export default function Award({ awardList }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.awards.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.awards.description}
      icon={PROFILE_DATA_CATEGORY.awards.icon}
    >
      {awardList?.map((award: AwardType, index: number) => (
        <ProfileAward award={award} key={`award-${index}`} />
      ))}
    </CardWithTitle>
  );
}
