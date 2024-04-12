import Explore from "./Explore";

export default function Posts() {
  return (
    <div className="bg-red-200 pt-28 ">
      <div className="w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row border">
        <div className="w-full lg:w-1/2 px-10 lg:px-0">
          <div className="w-full lg:sticky top-24 lg:pb-20">
            <h1 className="text-2xl lg:text-5xl pb-5 lg:pb-10 font-semibold lg:pt-28 tracking-wide">
              <span className="text-orange-500 font-mono">
                Lensational Snaps:
              </span>{" "}
              Dive into the Best User Captures
            </h1>
            <div className="flex justify-end lg:justify-start">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center me-2 mb-2"
              >
                EXPLORE
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <Explore />
        </div>
      </div>
    </div>
  );
}
