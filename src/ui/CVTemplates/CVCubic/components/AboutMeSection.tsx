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
  aboutMe: string;
};

export default function AboutMeSection({
  personalInformation,
  templateColor,
  aboutMe,
}: Props) {
  return (
    <div className="gap-2 flex flex-col">
      <div className="z-20 flex flex-col gap-2">
        <Title
          type="h2"
          className={`md:text-start text-cv_color_red !text-${templateColor}`}
        >
          {personalInformation.name}
        </Title>
        <Title type="h4" className="text-bold md:text-start font-normal">
          {personalInformation.title}
        </Title>
      </div>

      <div className="sm:grid-cols-2 sm:grid-rows-2 grid grid-cols-1  gap-y-2 z-20">
        <div className="flex flex-row gap-2 flex-nowrap">
          <span className="text-base text-bold items-center">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="text-base text-bold line-clamp-1">
            {personalInformation.email}
          </span>
        </div>
        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-base text-bold">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="text-base text-bold line-clamp-1">
            {personalInformation.phone}
          </span>
        </div>
        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-base text-bold">
            <FontAwesomeIcon icon={faGift} />
          </span>
          <span className="text-base text-bold line-clamp-1">
            {personalInformation.birthday}
          </span>
        </div>

        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-base text-bold">
            <FontAwesomeIcon icon={faLocation} />
          </span>
          {personalInformation.location && (
            <span className="text-base text-bold line-clamp-1">
              {personalInformation.location}
            </span>
          )}
        </div>
      </div>

      <p className="text-bold col-span-10 text-base">{aboutMe}</p>
    </div>
  );
}
