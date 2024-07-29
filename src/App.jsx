import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
      <div className="background relative w-full h-full flex flex-col items-center">
        <h1 className="font-bold absolute rounded-md text-3xl px-3 py-2 mt-8 m w-11/12 text-center bg-white"> RANDOM GIFS </h1>
         <div className="flex flex-col gap-10 w-full items-center">
          <Random/>
          <Tag/>
         </div>
      </div>
  );
}
