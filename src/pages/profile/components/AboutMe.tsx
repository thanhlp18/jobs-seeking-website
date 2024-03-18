import CardWithTitle from "../../../ui/Card/CardWithTitle";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import profile_about_me_icon from "../../../assets/profile_about_me.svg";

type Props = { aboutMeDescription: string };

export default function AboutMe({ aboutMeDescription }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.aboutMe.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.aboutMe.description}
      icon={profile_about_me_icon}
    >
      <div>
        <p>{aboutMeDescription}</p>
      </div>
    </CardWithTitle>
  );
}
