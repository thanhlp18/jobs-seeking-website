import {
  faCameraRotate,
  faEnvelope,
  faGlobe,
  faLocation,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AxiosError, isAxiosError } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Card from "../../../components/Card";
import Divider from "../../../components/Divider";
import EditIcon from "../../../components/EditIcon";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Title from "../../../components/Title";
import {
  getUserInformationApi,
  srcToFile,
  updateUserInformationApi,
} from "../../../services/api/profileApi";
import {
  ApiProfileUserInformationResponseType,
  ProfileUserInformationType,
} from "../../../utils/type/profileType";

import PROFILE_NO_IMAGE_FILE from "../../../assets/profile_no_image.png";

const initialUserDataState: ProfileUserInformationType = {
  image_url: "",
  name: "",
  title: "",
  email: "",
  phone: "",
  birthday: "",
  gender: "",
  location: "",
};

export default function UserInformation() {
  const [userData, setUserData] =
    useState<ProfileUserInformationType>(initialUserDataState);
  const [selectedImage, setSelectedImage] = useState<File | undefined>();

  const handleChangeProfileInformation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.name, e.target.name == "image-url");
    if (e.target.name == "image-url") {
      if (e.target.files) {
        const newProfileImage = {
          ...userData,
          image_url: URL.createObjectURL(e.target.files[0]),
        };
        setUserData(newProfileImage);
      }
    } else {
      const newUserData = { ...userData, [e.target.name]: e.target.value };
      setUserData(newUserData);
    }
  };

  const handleSaveProfileInformation = () => {
    const newUserData = {
      name: userData.name,
      title: userData.title,
      email: userData.email,
      phone: userData.phone,
      birthday: userData.birthday,
      gender: userData.gender === "Male" ? "1" : "0",
      location: userData.location,
    };

    updateUserInformationApi(newUserData, selectedImage)
      .then((res) => {
        if (res.success) {
          toast.success("Profile information updated successfully");
        } else {
          toast.error(
            "Failed to update profile information: " + res.data.message
          );
        }
      })
      .catch((err) => {
        toast.error("Failed to update profile information: " + err);
      });
  };

  // Call api to get user information
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: ApiProfileUserInformationResponseType =
          await getUserInformationApi();
        setUserData(res.data[0]);
      } catch (err) {
        if (isAxiosError(err)) {
          const axiosErr = err as AxiosError;
          if (axiosErr.response && axiosErr.response.data) {
            toast.error(
              "Failed to fetch user information: " +
                //@ts-expect-error  Property 'message' does not exist on type '{}'.ts(2339)
                axiosErr.response.data.message
            );
          } else {
            toast.error(
              "Failed to fetch user information: An unexpected error occurred."
            );
          }
        } else {
          toast.error(
            "Failed to fetch user information: An unexpected error occurred."
          );
        }
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []);
  return (
    <Card className=" bg-white relative">
      <div className="flex gap-6 flex-col md:flex-row items-center md:items-start">
        <div
          className="bg-cover bg-center bg-no-repeat rounded-full relative block w-full p-16"
          style={{
            backgroundImage: `url(${userData.image_url})`,
            height: "120px",
            width: "120px",
          }}
        ></div>
        <div className="gap-2 flex flex-col w-full">
          <div>
            <Title type="h2" className="text-center md:text-start">
              {userData.name}
            </Title>
          </div>
          <Title type="h4" className="text-gray-600  text-center md:text-start">
            {userData.title}
          </Title>
          <Divider />
          <div className="sm:grid-cols-2 sm:grid-rows-3 grid grid-cols-1 gap-x-4 gap-y-2 ">
            <div className="flex flex-row gap-2 flex-nowrap">
              <span className="text-lg text-gray-400 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="font-medium text-base text-gray-700 line-clamp-1">
                {userData.email}
              </span>
            </div>
            <div className="flex flex-row gap-2 flex-nowrap items-center">
              <span className="text-lg text-gray-400">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="font-medium text-base text-gray-700 line-clamp-1">
                {userData.phone}
              </span>
            </div>
            <div className="flex flex-row gap-2 flex-nowrap items-center">
              <span className="text-lg text-gray-400">
                <FontAwesomeIcon icon={faGift} />
              </span>
              <span className="font-medium text-base text-gray-700 line-clamp-1">
                {userData.birthday}
              </span>
            </div>
            <div className="flex flex-row gap-2 flex-nowrap items-center">
              <span className="text-lg text-gray-400">
                <FontAwesomeIcon icon={faGift} />
              </span>
              {userData.gender && (
                <span className="font-medium text-base text-gray-700 line-clamp-1">
                  {userData.gender === "1" ? "Male" : "Female"}
                </span>
              )}
            </div>
            <div className="flex flex-row gap-2 flex-nowrap items-center">
              <span className="text-lg text-gray-400">
                <FontAwesomeIcon icon={faLocation} />
              </span>
              {userData.location && (
                <span className="font-medium text-base text-gray-700 line-clamp-1">
                  {userData.location}
                </span>
              )}
            </div>
            <div className="flex flex-row gap-2 flex-nowrap items-center">
              <span className="text-lg text-gray-400">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              {userData.website && (
                <span className="font-medium text-base text-gray-700 line-clamp-1">
                  {userData.website}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Personal details"
        handleSave={handleSaveProfileInformation}
        buttonContent={<EditIcon className="text-lg  " />}
        buttonClassName="absolute right-4 top-4"
      >
        <div>
          <div className="container mx-auto">
            <form>
              <div className="flex flex-col justify-center items-center py-6">
                <div
                  className="bg-cover bg-center bg-no-repeat rounded-full relative block w-full p-16"
                  style={{
                    backgroundImage: `url(${userData.image_url})`,
                    height: "120px",
                    width: "120px",
                  }}
                ></div>
                <div className="flex flex-row gap-4 text-base py-3">
                  <div>
                    <label
                      htmlFor="image-url"
                      className="cursor-pointer text-primary"
                    >
                      <FontAwesomeIcon icon={faCameraRotate} />{" "}
                      <span>Edit</span>
                    </label>
                    <input
                      type="file"
                      id="image-url"
                      name="image-url"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files) {
                          handleChangeProfileInformation(e);
                          setSelectedImage(e.target.files[0]);
                        }
                      }}
                    />
                  </div>
                  <label
                    htmlFor="image-url_delete"
                    className="cursor-pointer text-normal"
                  >
                    <FontAwesomeIcon icon={faTrash} /> <span>Delete</span>
                  </label>
                  <input
                    type="button"
                    id="image-url_delete"
                    name="image-url_delete"
                    className="hidden"
                    onClick={() => {
                      srcToFile(
                        PROFILE_NO_IMAGE_FILE,
                        "no-profile-image.png"
                      ).then((res) => {
                        setUserData({
                          ...userData,
                          image_url: URL.createObjectURL(res),
                        });
                      });
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  label="Name"
                  value={userData.name}
                  onChange={handleChangeProfileInformation}
                  containerClassName="flex flex-col gap-1"
                  required
                />
                <Input
                  placeholder="Title"
                  type="text"
                  name="title"
                  label="Title"
                  value={userData.title}
                  onChange={handleChangeProfileInformation}
                  containerClassName="flex flex-col gap-1"
                  required
                />
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  label="Email"
                  value={userData.email}
                  onChange={handleChangeProfileInformation}
                  containerClassName="flex flex-col gap-1"
                  required
                />
                <Input
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  label="Phone"
                  value={userData.phone}
                  onChange={handleChangeProfileInformation}
                  containerClassName="flex flex-col gap-1"
                  required
                />
                <Input
                  placeholder="Birthday"
                  type="date"
                  name="birthday"
                  label="Birthday"
                  value={userData.birthday}
                  onChange={handleChangeProfileInformation}
                  containerClassName="flex flex-col gap-1"
                  required
                />
                <Input
                  inputGroupType="styled-dropdown"
                  name="birthday"
                  label="Gender"
                  value={userData.gender}
                  options={[
                    { value: "1", label: "Male" },
                    { value: "0", label: "Female" },
                  ]}
                  onChange={handleChangeProfileInformation}
                  containerClassName="flex flex-col gap-1"
                  required
                />

                <Input
                  placeholder="Location"
                  type="text"
                  name="location"
                  label="Location"
                  value={userData.location}
                  onChange={handleChangeProfileInformation}
                  containerClassName="flex flex-col gap-1"
                  required
                />
                <Input
                  placeholder="Personal website"
                  type="text"
                  name="website"
                  label="Personal website"
                  value={userData.website}
                  onChange={handleChangeProfileInformation}
                  containerClassName="flex flex-col gap-1"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </Card>
  );
}
