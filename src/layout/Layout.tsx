import React, { FC } from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar";

const { Content } = Layout;
interface props{
    children?: React.ReactNode;
    id?: string;
}
const Layoutt:FC<props> = ({children, id}) => {
  return (
    <>
      <Layout>
        <Navbar />
        <Content className="p-5" id={id}>
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default Layoutt;
