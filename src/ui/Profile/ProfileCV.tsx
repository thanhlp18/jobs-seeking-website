import { Award, Certificate, ProfileDataForCV } from "../../utils/type";
import ProfileAward from "./ProfileAward";
import ProfileCertificate from "./ProfileCertificate";
import ProfilePersonalProject from "./ProfilePersonalProject";
import ProfileSkills from "./ProfileSkills";

type Props = {
  ProfileData: ProfileDataForCV;
  sectionKey: string;
};

export default function ProfileCV({ ProfileData, sectionKey }: Props) {
  switch (sectionKey) {
    case "skills":
      return <ProfileSkills skills={ProfileData.skills} />;

    default:
      return null;
  }
}
