import React from "react";
import { CertificateType } from "../../../utils/type";
import ProfileCertificate from "../../../ui/Profile/ProfileCertificate";
import CardWithTitle from "../../../ui/Card/CardWithTitle";
import { PROFILE_DATA_CATEGORY } from "../../../utils/constants";

type Props = { certificateList: CertificateType[] };

export default function Certificate({ certificateList }: Props) {
  return (
    <CardWithTitle
      title={PROFILE_DATA_CATEGORY.certificates.title}
      titleType="h3"
      description={PROFILE_DATA_CATEGORY.certificates.description}
      icon={PROFILE_DATA_CATEGORY.certificates.icon}
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
