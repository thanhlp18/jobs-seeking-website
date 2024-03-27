import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Markup } from "interweave";
import { PersonalProjectType } from "../../../utils/type";
import Title from "../../../components/Title";
import EditIcon from "../../../components/EditIcon";

type Props = {
  project: PersonalProjectType;
  type?: string;
};

export default function ProfilePersonalProject({
  project: { title, start_date, end_date, description },
}: Props) {
  return (
    <div className="flex flex-col gap-2 flex-nowrap">
      <div className="flex flex-col  flex-nowrap">
        <div className="relative">
          <Title type="h4">{title}</Title>
          <span className="absolute top-0 bottom-0 right-0 text-base flex flex-row flex-nowrap gap-3">
            <EditIcon />
            <span>
              <FontAwesomeIcon
                icon={faTrashCan}
                className="text-gray-500 cursor-pointer"
              />
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col  flex-nowrap">
        <div className="text-base font-medium text-bold">
          <span>{start_date}</span> - <span>{end_date}</span>
        </div>
        <Markup
          content={description}
          className="font-medium text-base text-bold  "
        />
      </div>
    </div>
  );
}
