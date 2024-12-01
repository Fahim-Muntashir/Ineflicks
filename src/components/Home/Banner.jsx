import Container from "../Shared/Container";

const Banner = () => {
  return (
    <Container>
      <div
        className="w-full h-[70vh] bg-cover bg-center relative rounded-xl"
        style={{
          backgroundImage: "url(/public/assets/bannerbg.png)",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-black rounded-xl"></div>

        {/* Text Container */}
        <div className="h-full flex justify-center items-center text-center text-white relative z-10">
          <h1 className="text-[74px] font-bold shadow-lg leading-tight">
            Media Streaming the <br />
            Cineflicks Way
          </h1>
        </div>

        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 "
          aria-label="Previous"
        >
          <img src="/public/assets/rl.svg"></img>
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-4 transform "
          aria-label="Next"
        >
          {" "}
          <img src="/public/assets/ra.svg"></img>
        </button>
      </div>
      <div className="flex items-center justify-center gap-x-3 my-4">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <div className="w-3 h-3 bg-[#fff] rounded-full"></div>
        <div className="w-3 h-3 bg-[#fff] rounded-full"></div>
        <div className="w-3 h-3 bg-[#fff] rounded-full"></div>
        <div className="w-3 h-3 bg-[#fff] rounded-full"></div>
      </div>
    </Container>
  );
};

export default Banner;
