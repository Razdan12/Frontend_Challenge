import axios, { AxiosPromise } from "axios";
import { getNews } from "./Utils";

const instance = axios.create({
    baseURL: "https://newsapi.org/v2/",
  });

  const Api = {
    getLatestNews: (): AxiosPromise<getNews> =>
    instance({
        method: "GET",
        url: "/top-headlines?country=us&apiKey=b10fe2d101984448b6be3236b17e99a9"
    })
  }

export default Api