import { Input } from "antd";
const { Search } = Input;
const Footer = () => {
  return (
    <div>
        <div className="w-full h-32 flex justify-center mt-10 mb-10">
          <div className="w-5/6 h-fit bg-slate-400 sm:grid sm:grid-cols-2 rounded-md shadow-md inline mb-5">
            <div className="p-5 font-semibold">
              <p className="text-sm">Get First News Update</p>
              <p className="sm:text-3xl text-xl">Get The News in front line</p>
              <p className="sm:text-3xl text-xl ">
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
    </div>
  )
}

export default Footer