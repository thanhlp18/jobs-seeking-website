import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CVElegant from "../ui/CVElegant";
import CVMinimal from "../ui/CVMinimal";

const CVTemplate = [
  {
    id: 1,
    image: "../src/assets/cv-template-elegant.png",
    name: "Elegant",
    template: <CVElegant />,
  },
  {
    id: 2,
    image: "../src/assets/cv-template-minimal.png",
    name: "Minimal",
    template: <CVMinimal />,
  },
  { id: 3, image: "../src/assets/cv-template-cubic.png", name: "Cubic" },
  { id: 4, image: "../src/assets/cv-template-modern.png", name: "Modern" },
];

export default function CreateCV() {
  const [selectedTemplate, setSelectedTemplate] = React.useState<number>(0);
  return (
    <div className="grid grid-cols-12 -mt-6 -mx-4 relative">
      <section className="fixed top-11 w-1/3 left-0 grid grid-cols-2  bottom-0 bg-gray-500 py-6 px-4 gap-2 overflow-scroll no-scrollbar">
        {CVTemplate.map((template) => (
          <div
            className={`p-2 max-w-fit flex flex-col items-center gap-2   `}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <span className="relative">
              <img
                src={`${template.image}`}
                alt={template.name}
                className={`rounded-sm hover:outline hover:outline-4 hover:outline-green-500 ${
                  selectedTemplate == template.id
                    ? "outline outline-4 outline-green-500"
                    : ""
                }`}
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`w-8 h-8 text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  selectedTemplate == template.id ? "block" : "hidden"
                }`}
              />
            </span>
            <p className="font-semibold text-bold">{template.name}</p>
          </div>
        ))}
      </section>
      <section className="col-span-8  pt-6 px-4 fixed top-11 bottom-0 bg-gray-300  left-1/3 right-0 overflow-scroll no-scrollbar">
        <div className="mx-2 md:mx-4 lg:mx-6 my-2 md:my-2 lg:my-2">
          {CVTemplate[selectedTemplate - 1]?.template}
        </div>
      </section>
    </div>
  );
}
