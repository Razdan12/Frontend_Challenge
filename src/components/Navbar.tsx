import { useState } from "react";
import { Input, Layout, Menu } from "antd";
import { GlobalOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <Header className="bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center text-red-500 gap-3 sm:text-xl">
            <GlobalOutlined />
            <span className="font-bold">Bulletin</span>
          </div>

          <div className="sm:flex items-center">
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              className="text-center"
            >
              <Menu.Item key="home">Home</Menu.Item>
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
