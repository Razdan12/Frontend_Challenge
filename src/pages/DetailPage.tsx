import { Image, Space, Typography } from "antd";
import Layoutt from "../layout/Layout";
import { useStore } from "../store/Store";
import Footer from "../components/Footer";

const { Title } = Typography;

const DetailPage = () => {
  const { image, title, author, description} = useStore();
  return (
    <div>
      <Layoutt>
        <div className="w-full h-3/4 flex justify-start items-center">
          <Image
            src={image ?? ""}
            fallback="https://tse3.mm.bing.net/th?id=OIP.FjLkalx51D8xJcpixUGJywHaE8&pid=Api&P=0&h=180"
          />
        </div>

        <Space direction="vertical" className="mt-5">
          <Title className="font-bold p-4">{title}</Title>
          <Title level={5} className="font-semibold p-4">
            Author : {author}
          </Title>
          <Title level={5} className="p-4">
            {description}
          </Title>
          <Footer/>
        </Space>
      </Layoutt>
    </div>
  );
};

export default DetailPage;
