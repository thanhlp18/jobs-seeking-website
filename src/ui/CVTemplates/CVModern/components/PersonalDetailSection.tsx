import React from "react";
import { ProfileUserInformationType } from "../../../../utils/type";
import Title from "../../../../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGift,
  faGlobe,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  personalInformation: ProfileUserInformationType;
};

export default function PersonalDetailSection({ personalInformation }: Props) {
  return (
    <div className="flex flex-col gap-1.5 pb-28 text-white">
      <div className="z-10">
        <Title type="h2" className="	font-semibold">
          {personalInformation.name}
        </Title>
        <Title type="h5" className="font-normal	">
          {personalInformation.title}
        </Title>
      </div>
      <div className="flex flex-col flex-nowrap gap-1 ">
        <div className="flex flex-row gap-2 flex-nowrap">
          <span className="text-sm  items-center">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="text-sm  line-clamp-1">
            {personalInformation.email}
          </span>
        </div>
        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-sm ">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="text-sm  line-clamp-1">
            {personalInformation.phone}
          </span>
        </div>
        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-sm ">
            <FontAwesomeIcon icon={faGift} />
          </span>
          <span className="text-sm  line-clamp-1">
            {personalInformation.birthday}
          </span>
        </div>

        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-sm ">
            <FontAwesomeIcon icon={faLocation} />
          </span>
          {personalInformation.location && (
            <span className="text-sm  line-clamp-1">
              {personalInformation.location}
            </span>
          )}
        </div>

        <div className="flex flex-row gap-2 flex-nowrap items-center">
          <span className="text-sm ">
            <FontAwesomeIcon icon={faGlobe} />
          </span>
          {personalInformation.website && (
            <a
              className="text-sm  line-clamp-1 max-w-[200px]"
              href={personalInformation.website}
            >
              {personalInformation.website}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
