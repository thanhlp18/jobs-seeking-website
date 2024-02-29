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
};
export default function PersonalDetailSection({ personalInformation }: Props) {
  return (
    <div className=" bg-slate-500 p-6 relative">
      <div className="flex gap-6 flex-col md:flex-row items-center md:items-start">
        <div>
          <img
            src={personalInformation.profileImage}
            alt="profile-avatar"
            height={140}
            width={140}
          />
        </div>
        <div className="gap-2 flex flex-col w-full">
          <div>
            <Title type="h2" className="text-center md:text-start text-white">
              {personalInformation.name}
            </Title>
            <Title
              type="h4"
              className="text-white text-center md:text-start font-normal"
            >
              {personalInformation.title}
            </Title>
          </div>

          <div className="sm:grid-cols-2 sm:grid-rows-2 grid grid-cols-1  gap-y-2 ">
            <div className="flex flex-row gap-2 flex-nowrap">
              <span className="text-base text-white items-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="text-base text-white line-clamp-1">
                {personalInformation.email}
              </span>
            </div>
            <div className="flex flex-row gap-2 flex-nowrap items-center">
              <span className="text-base text-white">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="text-base text-white line-clamp-1">
                {personalInformation.phone}
              </span>
            </div>
            <div className="flex flex-row gap-2 flex-nowrap items-center">
              <span className="text-base text-white">
                <FontAwesomeIcon icon={faGift} />
              </span>
              <span className="text-base text-white line-clamp-1">
                {personalInformation.birthday}
              </span>
            </div>

            <div className="flex flex-row gap-2 flex-nowrap items-center">
              <span className="text-base text-white">
                <FontAwesomeIcon icon={faLocation} />
              </span>
              {personalInformation.location && (
                <span className="text-base text-white line-clamp-1">
                  {personalInformation.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <EditIcon className="absolute right-4 top-4 text-sm" /> */}
    </div>
  );
}
