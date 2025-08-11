import { Popover } from "antd";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const text = <span>Do you want to Logout ?</span>;
  const content = (
    <div>
      <Link to="/login">
        <p>Yes</p>
      </Link>
      <p>No</p>
    </div>
  );

  return (
    <div className="flex justify-between  py-7 px-5">
      <div></div>
      <h1 className="text-3xl font-semibold">CV Management System</h1>

      <Popover placement="bottom" title={text} content={content}>
        <div className="flex items-center justify-center gap-x-2">
          <p>Log Out</p>
          <AiOutlineLogout size={20} />
        </div>
      </Popover>
    </div>
  );
};

export default Header;
