import React, { FC } from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar";

const { Content } = Layout;
interface props {
  children?: React.ReactNode;
  id?: string;
}
const Layoutt: FC<props> = ({ children, id }) => {
  return (
    <>
      <Layout >
        <div className="sticky top-0 z-20">
          <Navbar />
        </div>
        <Content className="p-5 overflow-x-hidden" id={id}>
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default Layoutt;
