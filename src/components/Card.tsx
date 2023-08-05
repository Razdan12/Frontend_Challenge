import { FC } from "react";
import { Card, Image} from "antd";

const { Meta } = Card;

interface props{
    image: string;
    title: string;
    description: string
    author: string
    key: number

}
const Cardd:FC<props> = ({image, title, description, author, key}) => {
  return (
    <div>
        <Card
           className="w-[300] min-h-[300] max-w-sm transform hover:scale-110 transition-transform duration-500 hover:z-20 cursor-pointer"
            cover={
              <Image
  
    src={image}
    fallback="https://tse3.mm.bing.net/th?id=OIP.FjLkalx51D8xJcpixUGJywHaE8&pid=Api&P=0&h=180"/>
             
            }
          >
            <Meta
              title={title}
              description={description}
              
            />
            <div className="w-full flex justify-end mt-5" key={key}>
              {author}

            </div>
          </Card>
    </div>
  )
}

export default Cardd
