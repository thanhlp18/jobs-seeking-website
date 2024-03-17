import Title from "../../components/Title";
import { EducationType } from "../../utils/type";

export default function ProfileEducation({
  degree,
  institution,
  start_date,
  end_date,
  additionalDetail,
}: EducationType) {
  return (
    <div className="flex flex-col gap-2 flex-nowrap ">
      <div className="flex  flex-col  flex-nowrap">
        <Title type="h4">{degree}</Title>

        <div className="text-base text-bold  ">{institution}</div>
      </div>
      <div className="flex flex-col  flex-nowrap">
        <div className="text-base  text-bold  ">
          <span>{start_date}</span> - <span>{end_date}</span>
        </div>
        <div className=" text-base text-bold   ">{additionalDetail}</div>
      </div>
    </div>
  );
}
