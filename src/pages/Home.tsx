import React, { useEffect, useState } from "react";
import Layoutt from "../layout/Layout";
import { Input } from "antd";
import Carousell from "../components/Carousel";
import Cardd from "../components/Card";
import RestApi from "../service/RestApi";
import { getNews } from "../service/Utils";

const { Search } = Input;
const Home: React.FC = () => {
  const [news, setNews] = useState<getNews | any>([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await RestApi.getLatestNews();
        setNews(response.data?.articles);
      } catch (error) {
        console.log(error);
      }
    };

    getNews();
  }, []);

console.log(news[1])
  return (
    <>
      <Layoutt>
        <Carousell />
        <div className="mt-5 mb-5">
          <span className="m-5 font-bold text-3xl">Latest News</span>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          {news.map((item: any, index: number) => (

          <Cardd
            image={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            key={index}
          />
          ))}
          
        </div>

        <div className="w-full h-32 flex justify-center mt-10">
          <div className="w-5/6 h-full bg-slate-400 grid grid-cols-2 rounded-md shadow-md">
            <div className="p-5 font-semibold">
              <p className="text-sm">Get First News Update</p>
              <p className="text-3xl">Get The News in front line</p>
              <p className="text-3xl">
                <span className="text-red-700 font-bold">Subscribe</span> our
                latest update
              </p>
            </div>
            <div className="flex justify-center items-center p-5">
              <Search
                placeholder="Your Email"
                allowClear
                enterButton="Subscribe"
                size="large"
                className="bg-red-500 rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </Layoutt>
    </>
  );
};

export default Home;
