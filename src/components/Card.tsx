import { FC } from "react";
import { Card, Image } from "antd";
import { useStore } from "../store/Store";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

interface props {
  image: string;
  title: string;
  description: string;
  author: string;
  content: string;
}
const Cardd: FC<props> = ({ image, title, description, author, content }) => {
  const navigate = useNavigate();
  const { setImage, setTitle, setAuthor, setContent, setDescription } =
    useStore();
  const handleDetail = () => {
    setAuthor(author);
    setContent(description);
    setDescription(content);
    setImage(image);
    setTitle(title);
    navigate("/detail");
  };

  return (
    <div>
      <Card
        className="w-[300] min-h-[300] max-w-sm hover:bg-slate-200 hover:z-20 "
      
        cover={
          <Image
            src={image}
            fallback="https://tse3.mm.bing.net/th?id=OIP.FjLkalx51D8xJcpixUGJywHaE8&pid=Api&P=0&h=180"
          />
        }
      >
        <Meta title={title} description={description} />
        <div className="w-full flex justify-end mt-5 text-md font-bold cursor-pointer hover:text-blue-700"   onClick={handleDetail}>Read More..</div>
      </Card>
    </div>
  );
};

export default Cardd;
