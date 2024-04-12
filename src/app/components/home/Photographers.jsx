import PhotographerDetails from "./PhotographerDetails";

const Photographers = () => {
  return (
    <section className="w-full bg-red-200 py-20">
      <div className="w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row-reverse border">
        <div className="w-full lg:w-1/2 px-10 lg:px-0">
          <h1 className="text-2xl lg:text-5xl pb-5 lg:pb-10 font-semibold lg:pt-28 tracking-wide">
            <span className="text-orange-500 font-mono">Trending Talents:</span>{" "}
            See Who's Capturing Hearts (and Likes)
          </h1>
          <div className="flex justify-end pr-2 lg:justify-start lg:pr-0">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              EXPLORE
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <PhotographerDetails />
        </div>
      </div>
    </section>
  );
};

export default Photographers;
