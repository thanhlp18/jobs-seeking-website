import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/brand_logo.svg";
import {
  getUserInformation,
  getUserAuthentication,
} from "../../services/redux/user";

const Header: React.FC = () => {
  const user = useSelector(getUserAuthentication);
  const userInformation = useSelector(getUserInformation);
  return (
    <header className="bg-gray-800 	max-w-full fixed right-0 left-0 z-50 top-0 h-fit">
      <div className="flex items-center justify-between px-4 py-2 mx-auto xl:max-w-[1280px]">
        <Link to="/" className="text-white">
          <img src={logo} alt="brand-logo" width={60} />
        </Link>

        <nav>
          <ul className="flex space-x-4 items-center">
            <li></li>
            <li>
              <Link to="/" className="text-white">
                Tìm kiếm công việc
              </Link>
            </li>
            {/* <li>
              <Link to="/companies" className="text-white">
                Công Ty
              </Link>
            </li> */}
            <li>
              <Link to="/contact" className="text-white">
                Liên hệ
              </Link>
            </li>
            <li>
              <Link to="/create-cv" className="text-white">
                Tạo CV
              </Link>
            </li>
            <li>
              {!(
                user.name === "" &&
                user.token === "" &&
                user.token_type === ""
              ) ? (
                <Link
                  to="/profile"
                  className="text-white flex flex-row items-center flex-1 gap-2 group/item"
                >
                  Chào mừng {user.name}
                  <div
                    className="bg-cover bg-center bg-no-repeat rounded-full relative block p-1 aspect-square w-8 shadow-md"
                    style={{
                      backgroundImage: `url(${userInformation.image_url})`,
                    }}
                  ></div>
                </Link>
              ) : (
                <Link to="/sign-in" className="text-white">
                  Đăng nhập
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
