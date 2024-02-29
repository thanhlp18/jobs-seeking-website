import { Education } from "../../../../utils/type";

type Props = {
  education: Education[];
};

export default function EducationSection({ education }: Props) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <p className="text-bold text-center md:text-start font-bold col-span-2 ">
        Education
      </p>

      <div className="text-bold col-span-10 text-base">
        {education.map((deg) => (
          <div className="flex flex-col gap-2 flex-nowrap">
            <div className="flex flex-col  flex-nowrap">
              <div className="text-base  text-bold font-bold">
                {deg.institution}
              </div>
              <div className="flex flex-row gap-2  flex-nowrap">
                <div className="text-base  text-bold">
                  <span>{deg.duration.start}</span> -{" "}
                  <span>{deg.duration.end}</span>
                </div>

                <span>|</span>
                <p className="text-bold text-base ">{deg.degree}</p>
              </div>
            </div>
            <div className=" text-base text-bold ">{deg.additionalDetail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
