import { FC } from "react";
import { Card} from "antd";

const { Meta } = Card;

interface props{
    image: string;
    title: string;
    description: string

}
const Cardd:FC<props> = ({image, title, description}) => {
  return (
    <div>
        <Card
           className="w-[300] max-w-sm transform hover:scale-110 transition-transform duration-500 hover:z-30"
            cover={
              <img
                alt="image Cover"
                src={image}
              />
            }
          >
            <Meta
              title={title}
              description={description}
            />
          </Card>
    </div>
  )
}

export default Cardd