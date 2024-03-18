import CardWithTitle from "../../../ui/Card/CardWithTitle";
import ProfileAward from "../../../ui/Profile/ProfileAward";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { AwardType } from "../../../utils/type";
import profile_awards from "../../../assets/profile_awards.svg";
type Props = { awardList: AwardType[] };

export default function Award({ awardList }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.awards.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.awards.description}
      icon={profile_awards}
    >
      {awardList?.map((award: AwardType, index: number) => (
        <ProfileAward award={award} key={`award-${index}`} />
      ))}
    </CardWithTitle>
  );
}
