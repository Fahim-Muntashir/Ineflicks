import Container from "../Shared/Container";

const TrendingNow = [
  {
    name: "Love Aj Kal",
    image: "/assets/TrendingNow/love.png",
  },
  {
    name: "Lootera",
    image: "/assets/TrendingNow/lootera.png",
  },
  {
    name: "Raanjhanaa",
    image: "/assets/TrendingNow/Rann.png",
  },
];

const category = [
  "Movies",
  "Series",
  "Actions",
  "Anime",
  "Sci-Fi",
  "Kids",
  "Fiction",
  "Live",
  "Studios",
];

const MovieCategories = () => {
  return (
    <div className="my-[63px] relative">
      <Container>
        {/* Trending Movies */}
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold text-[30px]">Trending Now</h1>
            <a href="#" className="text-primary font-semibold text-[18px]">
              View All
            </a>
          </div>

          <div className="relative mt-[20px]">
            {/* Scrollable Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
              {TrendingNow.map((movie, index) => (
                <div key={index}>
                  <img
                    src={movie.image}
                    alt={`Poster of ${movie.name}`}
                    className="w-full h-auto rounded-md"
                  />
                  <h2 className="mt-2 text-[22px] font-medium">{movie.name}</h2>
                </div>
              ))}
            </div>

            {/* Static Arrows in the Middle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <button className="text-white p-2 rounded-full ">
                <img src="/public/assets/rl.svg"></img>
              </button>

              <button className="text-white p-2 rounded-full ">
                <img src="/public/assets/ra.svg"></img>
              </button>
            </div>
          </div>
        </div>

        {/* Movie Category Button */}

        <div className="flex my-[43px]">
          {category.map((category, index) => (
            <button
              key={index}
              className={`  text-[16px] px-[31px] py-[13px] rounded-full font-[700] ${
                category === "Movies"
                  ? "bg-primary text-black" // Active button styles
                  : " text-white" // Inactive button styles
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default MovieCategories;
