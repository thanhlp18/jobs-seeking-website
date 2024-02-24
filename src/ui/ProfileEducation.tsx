import Title from "../components/Title";
import { Education } from "../utils/type";

export default function ProfileEducation({
  degree,
  institution,
  duration: { start, end },
  additionalDetail,
}: Education) {
  return (
    <div className="flex flex-col gap-2 flex-nowrap ">
      <div className="flex  flex-col  flex-nowrap">
        <Title type="h4">{degree}</Title>

        <div className="text-base text-bold  ">{institution}</div>
      </div>
      <div className="flex flex-col  flex-nowrap">
        <div className="text-base  text-bold  ">
          <span>{start}</span> - <span>{end}</span>
        </div>
        <div className=" text-base text-bold   ">{additionalDetail}</div>
      </div>
    </div>
  );
}
