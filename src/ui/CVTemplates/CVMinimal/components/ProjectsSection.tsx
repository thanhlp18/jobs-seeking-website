import Title from "../../../../components/Title";
import { PersonalProject } from "../../../../utils/type";

type Props = {
  personalProjects: PersonalProject[];
  templateColor: string;
};

export default function ProjectsSection({
  personalProjects,
  templateColor,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <Title type="h6" className={`font-medium text-[${templateColor}]`}>
        PERSONAL PROJECT
      </Title>
      <div className="text-bold flex flex-col gap-1 text-base ">
        {personalProjects.map((project, index) => (
          <div className="flex flex-col  flex-nowrap" key={`project-${index}`}>
            <div className="flex flex-row flex-nowrap justify-between">
              <div className="text-base  text-bold font-bold">
                {project.title}
              </div>

              <p className="text-bold text-base text-right">
                {project.duration.start} - {project.duration.end}
              </p>
            </div>

            <div
              className=" text-base text-bold ml-2"
              dangerouslySetInnerHTML={{
                __html: project.description,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
