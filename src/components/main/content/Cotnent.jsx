import { BsClock } from "react-icons/bs";
export default function Cotnent() {
  const datas = [
    {
      name: "Batman",
      url: "./assets/img/batman_begins.jpg",
      main: "Duy",
      time : "125p"
    },
    {
      name: "Batman",
      url: "./assets/img/batman_begins.jpg",
      main: "Duy",
      time : "125p"
    },
    {
      name: "Batman",
      url: "./assets/img/batman_begins.jpg",
      main: "Duy",
      time : "125p"
    },
    {
      name: "Batman",
      url: "./assets/img/batman_begins.jpg",
      main: "Duy",
      time : "125p"
    },
    {
      name: "Batman",
      url: "./assets/img/batman_begins.jpg",
      main: "Duy",
      time : "125p"
    },
    {
      name: "Batman",
      url: "./assets/img/batman_begins.jpg",
      main: "Duy",
      time : "125p"
    },
    {
      name: "Batman",
      url: "./assets/img/batman_begins.jpg",
      main: "Duy",
      time : "125p"
    },
  ];
  return (
    <div className="grid md:grid-cols-4 gap-7 mb-8">
      {datas.map((data, index) => (
        <div
          className="card"
          key={index}
        >
          <img src={data.url} alt="" className="w-full" />
          <div className="p-4 text-white">
            <h4>{data.name}</h4>
            <p>{data.main}</p>
          </div>
          <div className=" flex justify-between items-center rounded-md bg-cyan-50 absolute top-2 left-2 p-2 md:min-w-[25%]">
            <BsClock />
            <p className="ml-1 ">{data.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
