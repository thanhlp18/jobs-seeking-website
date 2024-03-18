import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Interweave } from "interweave";
import EditIcon from "../../components/EditIcon";
import Title from "../../components/Title";
import { AwardType } from "../../utils/type";

type Props = {
  award: AwardType;
  type?: string;
};

export default function ProfileAward({ award, type }: Props) {
  switch (type) {
    default:
      return (
        <div className="flex flex-col gap-0.5 flex-nowrap">
          <div className="flex flex-col  flex-nowrap">
            <div className="relative">
              <Title type="h4">{award.title}</Title>
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
          <div className="text-base text-bold ">{award.provider}</div>
          <div className="text-base  text-bold">{award.issueDate}</div>
          <Interweave
            content={award.description}
            className=" text-base text-bold"
          />
        </div>
      );
  }
}
