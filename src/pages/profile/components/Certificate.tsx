import CardWithTitle from "../../../ui/Card/CardWithTitle";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";
import { CertificateType } from "../../../utils/type";
import profile_certificates from "../../../assets/profile_certificates.svg";
import CertificateWrapper from "./CertificateWrapper";

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
        <CertificateWrapper
          certificate={certificate}
          key={`certificate-${index}`}
        />
      ))}
    </CardWithTitle>
  );
}
