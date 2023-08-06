import { Link } from "react-router-dom";
import { Input, Layout, Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  return (
    <div>
      <Header className="bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center text-red-500 gap-3 sm:text-xl">
            <Link to="/" className="flex justify-center items-center">
              <GlobalOutlined />
              <span className="font-bold ml-2">Bulletin</span>
            </Link>
          </div>

          <div className="sm:flex items-center">
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              className="text-center"
            >
              <Menu.Item key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="about">About</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
          </div>

          <div className="sm:flex hidden justify-center items-center">
            <Input.Search placeholder="search" />
          </div>
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
