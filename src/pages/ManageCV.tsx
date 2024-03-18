import {
  faCheck,
  faFileLines,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function ManageCV() {
  return (
    <Wrapper className="flex flex-col gap-6">
      <Card className="bg-white gap-5 flex flex-col">
        <Title type="h3">Manage CVs</Title>
        <p className="font-medium text-normal">
          Upload your CV below to use it throughout your application process
        </p>
        <div className="flex flex-row items-center gap-4  p-5 border border-solid border-gray-300 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faFileLines}
              className="h-[40px] text-normal"
            />
          </div>

          <div className="flex flex-col flex-1">
            <Title type="h5" className="font-medium">
              Your own CV
            </Title>
            <div className="text-base flex flex-row cursor-pointer">
              <span className="pr-2 font-semibold text-primary">
                <FontAwesomeIcon icon={faUpload} className="pr-2" />
                Upload
              </span>

              <span className="font-medium text-gray-400">
                No file chosen (Use .doc, .docx or .pdf files, 3MB and no
                password protected)
              </span>
            </div>{" "}
          </div>
          <Button
            type="button"
            buttonType="disabled"
            className="py-1.5 px-3 rounded-sm self-start items-center justify-center"
          >
            <FontAwesomeIcon icon={faCheck} className="text-xs" />
            <span className="pl-2">Default</span>
          </Button>
        </div>
      </Card>
      {/* {PROFILE_DATA_CATEGORY.filter(
        (category) => category.id === "cover-letter"
      ).map((category) => (
        <CardWithTitle
          title={category.title}
          titleType="h3"
          description={category.description}
          icon={category.icon}
        ></CardWithTitle>
      ))} */}
    </Wrapper>
  );
}
