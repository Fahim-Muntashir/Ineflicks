import Container from "../Shared/Container";

const Banner = () => {
  return (
    <Container>
      <div
        className="w-full h-[70vh] bg-cover bg-center relative rounded-xl "
        style={{
          backgroundImage: "url(/public/assets/bannerbg.png)",
        }}
      >
        {/* Gradient overlay from primary to black */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-black rounded-xl"></div>

        {/* Text Container with Shadow */}
        <div className="h-full flex justify-center items-center text-center text-white relative z-10">
          <h1 className="text-[74px] font-bold shadow-lg drop-shadow-md">
            Media Streaming the <br />
            Cineflicks Way
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
