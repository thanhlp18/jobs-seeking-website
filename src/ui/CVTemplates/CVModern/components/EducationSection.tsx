import React from "react";
import { Education } from "../../../../utils/type";
import Title from "../../../../components/Title";

type Props = {
  education: Education[];
  templateColor: string;
};

export default function EducationSection({ education, templateColor }: Props) {
  return (
    <div className=" col-span-10 text-sm gap-1.5">
      <Title type="h6" className={`font-medium text-[${templateColor}]`}>
        EDUCATION
      </Title>
      {education.map((deg, index) => (
        <div className="flex flex-col gap-2 flex-nowrap" key={index}>
          <div className="flex flex-col  flex-nowrap">
            <div className="text-sm  text-bold">
              <span>{deg.duration.start}</span> <span> - </span>
              <span>{deg.duration.end}</span>
            </div>
            <div className="text-sm  text-bold font-bold">
              {deg.institution}
            </div>
            <p className="text-bold text-sm ">{deg.degree}</p>
          </div>
          <div className=" text-sm text-bold ">{deg.additionalDetail}</div>
        </div>
      ))}
    </div>
  );
}
