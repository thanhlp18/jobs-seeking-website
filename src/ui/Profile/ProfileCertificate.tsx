import {
  faTrashCan,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditIcon from "../../components/EditIcon";
import Title from "../../components/Title";
import { CertificateType } from "../../utils/type";
import { Interweave } from "interweave";
import Link from "../../components/Link";

type Props = {
  certificate: CertificateType;
  type?: string;
};

export default function ProfileCertificate({ certificate, type }: Props) {
  switch (type) {
    default:
      return (
        <div className="flex flex-col gap-0.5 flex-nowrap">
          <div className="flex flex-col  flex-nowrap">
            <div className="relative">
              <Title type="h4">{certificate.title}</Title>
              <span className="absolute top-0 bottom-0 right-0 text-base flex flex-row flex-nowrap gap-3 cursor-pointer">
                <EditIcon />
                <span>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="text-gray-500"
                  />
                </span>
              </span>
            </div>
          </div>
          <div className="text-base text-bold ">{certificate.provider}</div>
          <div className="text-base  text-bold">{certificate.issueDate}</div>
          <Interweave
            content={certificate.description}
            className=" text-base text-bold"
          />

          <Link
            to={certificate.certificateUrl}
            className="flex flex-row gap-2 items-center pt-1"
            target="_blank"
          >
            <>
              <span>View certificate</span>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </>
          </Link>
        </div>
      );
  }
}
