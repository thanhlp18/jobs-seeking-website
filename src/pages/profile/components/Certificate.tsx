import CardWithTitle from "../../../ui/Card/CardWithTitle";
import ProfileCertificate from "../../../ui/Profile/ProfileCertificate";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { CertificateType } from "../../../utils/type";
import profile_certificates from "../../../assets/profile_certificates.svg";

type Props = { certificateList: CertificateType[] };

export default function Certificate({ certificateList }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.certificates.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.certificates.description}
      icon={profile_certificates}
    >
      {certificateList.map((certificate: CertificateType, index: number) => (
        <ProfileCertificate
          certificate={certificate}
          key={`certificate-${index}`}
        />
      ))}
    </CardWithTitle>
  );
}
