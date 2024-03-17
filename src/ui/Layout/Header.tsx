import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../services/redux/user";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <header className="bg-gray-800 	max-w-full fixed right-0 left-0 z-50 top-0 h-11">
      <div className="flex items-center justify-between px-4 py-2 mx-auto xl:max-w-[1280px]">
        <div className="text-white text-lg font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="text-white">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className="text-white">
                Tìm kiếm công việc
              </NavLink>
            </li>
            <li>
              <NavLink to="/companies" className="text-white">
                Công Ty
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white">
                Liên hệ
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-cv" className="text-white">
                Tạo CV
              </NavLink>
            </li>
            <li>
              {!(
                user.name === "" &&
                user.token === "" &&
                user.token_type === ""
              ) ? (
                <NavLink to="/profile" className="text-white">
                  Chào mừng {user.name}
                </NavLink>
              ) : (
                <NavLink to="/sign-in" className="text-white">
                  Đăng nhập
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
