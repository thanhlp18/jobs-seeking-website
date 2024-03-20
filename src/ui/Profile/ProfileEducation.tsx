import EditIcon from "../../components/EditIcon";
import Modal from "../../components/Modal";
import Title from "../../components/Title";
import { EducationType } from "../../utils/type";

export default function ProfileEducation({
  degree,
  institution,
  start_date,
  end_date,
  additionalDetail,
}: EducationType) {
  function handleSaveEducation() {}
  return (
    <div className="flex flex-col gap-2 flex-nowrap relative">
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
      <Modal
        title="Personal details"
        handleSave={handleSaveEducation}
        buttonContent={<EditIcon className="text-lg  " />}
        buttonClassName="absolute -right-4 top-0"
      >
        <div>
          <div className="container mx-auto">
            <form>
              <div className="">dsad</div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
