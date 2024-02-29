import { WorkExperience } from "../../../../utils/type";

type Props = {
  workExperience: WorkExperience[];
};

export default function WorkExperienceSection({ workExperience }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-bold col-span-10 text-base">
        {workExperience.map((experience, index) => (
          <div
            className="flex flex-col gap-2 flex-nowrap"
            key={`work-exp-${index}`}
          >
            <div className="flex flex-col  flex-nowrap">
              <div className="flex flex-row gap-2  flex-nowrap justify-between">
                <div className="text-base  text-bold font-bold">
                  {experience.position}
                </div>
                <div className="text-base  text-bold ">
                  {experience.duration.start} - {experience.duration.end}
                </div>
              </div>
              <p className="text-bold text-base font-bold">
                {experience.company}
              </p>
            </div>

            <div
              className=" text-base text-bold ml-2 "
              dangerouslySetInnerHTML={{
                __html: experience.responsibilities,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
