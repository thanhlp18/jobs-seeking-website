import {
  faEnvelope,
  faGift,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../../../components/Title";
import { ProfileUserInformationType } from "../../../../utils/type";

type Props = {
  personalInformation: ProfileUserInformationType;
  templateColor: string;
};
export default function PersonalDetailSection({
  personalInformation,
  templateColor,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <Title type="h6" className={`font-medium text-[${templateColor}]`}>
        PERSONAL DETAILS
      </Title>
      <div className="flex flex-col flex-nowrap gap-1 ">
        <div className="flex flex-row gap-2 flex-nowrap">
          <span className="text-base  items-center">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="text-base  line-clamp-1">
            {personalInformation.email}
          </span>
        </div>
        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-base ">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="text-base  line-clamp-1">
            {personalInformation.phone}
          </span>
        </div>
        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-base ">
            <FontAwesomeIcon icon={faGift} />
          </span>
          <span className="text-base  line-clamp-1">
            {personalInformation.birthday}
          </span>
        </div>

        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-base ">
            <FontAwesomeIcon icon={faLocation} />
          </span>
          {personalInformation.location && (
            <span className="text-base  line-clamp-1">
              {personalInformation.location}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
