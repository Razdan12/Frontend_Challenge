import React, { useEffect, useState } from "react";
import Layoutt from "../layout/Layout";
import { Spin } from "antd";
import Carousell from "../components/Carousel";
import Cardd from "../components/Card";
import RestApi from "../service/RestApi";
import { getNews } from "../service/Utils";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [news, setNews] = useState<getNews | any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true)
        const response = await RestApi.getLatestNews();
        setNews(response.data?.articles);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return (
    <>
      <Layoutt>
        {loading ? (
          <Spin tip="Loading" size="large">
            <div className="content mt-20" />
          </Spin>
          
        ) : (
          ""
          )}
        <div className={loading ? "hidden" : ""}>
          <Carousell />
          <div className="mt-5 mb-5">
            <span className="m-5 font-bold text-3xl">Latest News</span>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            {news.map((item: any, index: number) => (
              <Cardd
                image={item.urlToImage}
                title={item.title}
                description={item.content}
                author={item.author}
                content={item.description}
                key={index}
              />
            ))}
          </div>
          <Footer />
        </div>
      </Layoutt>
    </>
  );
};

export default Home;
