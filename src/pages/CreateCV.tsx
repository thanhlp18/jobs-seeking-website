import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import CVElegant from "../ui/CVElegant";
import CVMinimal from "../ui/CVMinimal";
import CVCubic from "../ui/CVCubic";

import Button from "../components/Button";
import ReactToPrint from "react-to-print";
import CVModern from "../ui/CVTemplates/CVModern/CVModern";

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
  {
    id: 3,
    image: "../src/assets/cv-template-cubic.png",
    name: "Cubic",
    template: <CVCubic />,
  },
  {
    id: 4,
    image: "../src/assets/cv-template-modern.png",
    name: "Modern",
    template: <CVModern />,
  },
];

export default function CreateCV() {
  const [selectedTemplate, setSelectedTemplate] = React.useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className="grid grid-cols-12 -mt-6 -mx-4 w-screen h-screen">
      <section className="fixed top-11 w-[30%] left-0 grid grid-cols-2  bottom-0 bg-gray-600 py-6 px-4 gap-2 overflow-scroll no-scrollbar">
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
      <section className="col-span-8 grid-rows-12  pt-6 px-4 fixed top-11 bottom-0 bg-gray-300  left-[30%] right-0 overflow-scroll no-scrollbar">
        <div className="mx-2 md:mx-4 lg:mx-6 my-2 md:my-2 lg:my-2">
          <div className="mx-auto" ref={ref}>
            {CVTemplate[selectedTemplate - 1]?.template}
          </div>
        </div>
      </section>
      <div className="fixed left-[30%] right-0 bottom-0 bg-gray-600 border-l-2 border-solid border-gray-700 flex flex-row justify-between py-2 px-8 items-center">
        <div>
          <span>Select color</span>
        </div>
        <ReactToPrint
          bodyClass="print-agreement"
          content={() => ref.current}
          trigger={() => (
            <Button type="button" className="py-2 px-6 rounded-md text-lg">
              Download CV
            </Button>
          )}
        />
      </div>
    </div>
  );
}
