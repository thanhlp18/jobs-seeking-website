import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditIcon from "../../components/EditIcon";
import Title from "../../components/Title";
import { WorkExperienceType } from "../../utils/type";
import { Interweave } from "interweave";

export default function ProfileWorkExperience({
  position,
  company,
  start_date,
  end_date,
  responsibilities,
}: WorkExperienceType) {
  return (
    <div className="flex flex-col gap-2 flex-nowrap">
      <div className="flex flex-col  flex-nowrap">
        <div className="relative">
          <Title type="h4">{position}</Title>
          <span className="absolute top-0 bottom-0 right-0 text-base flex flex-row flex-nowrap gap-3 cursor-pointer">
            <EditIcon />
            <span>
              <FontAwesomeIcon icon={faTrashCan} className="text-gray-500" />
            </span>
          </span>
        </div>
        <div className="text-base text-bold font-medium">{company}</div>
      </div>
      <div className="flex flex-col  flex-nowrap">
        <div className="text-base font-medium text-bold">
          <span>{start_date}</span> - <span>{end_date}</span>
        </div>
        <div className="font-medium text-base text-bold list-disc list-inside ">
          <Interweave content={responsibilities} />
        </div>
      </div>
    </div>
  );
}
