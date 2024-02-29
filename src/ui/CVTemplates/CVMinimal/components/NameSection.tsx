import Title from "../../../../components/Title";
import { ProfileUserInformationType } from "../../../../utils/type";

type Props = {
  personalInformation: ProfileUserInformationType;
};
export default function NameSection({ personalInformation }: Props) {
  return (
    <div className=" relative flex flex-row flex-nowrap  justify-between px-6 md:px-8 lg:px-12 pt-6 md:pt-8 lg:pt-12 items-center w-full after:w-[calc(100%+20rem)] after:h-48 after:bg-gray-200 after:absolute after:-ml-6 after:-rotate-3 after:-translate-y-12 lg:after:-translate-y-16 after:-translate-x-8 after:z-0  ">
      <div className="z-10">
        <Title type="h1" className="tracking-widest	font-semibold">
          {personalInformation.name}
        </Title>
        <Title type="h4" className="font-normal tracking-widest	">
          {personalInformation.title}
        </Title>
      </div>
      <div className="z-10">
        <img
          src={personalInformation.profileImage}
          alt="profile"
          className="rounded-full w-32 h-32 object-cover object-center"
        />
      </div>
    </div>
  );
}
