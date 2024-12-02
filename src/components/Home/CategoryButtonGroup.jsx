import Container from "../Shared/Container";

const categoryData = [
  "For You",
  "Reality",
  "Big Boss",
  "Top Free Movies",
  "Premium",
  "Top 10",
  "Studios",
  "Live",
  "Studios",
];

const CategoryButtonGroup = () => {
  return (
    <Container>
      <div className="flex justify-between overflow-hidden gap-x-[18px] my-[43px]">
        {categoryData.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full font-bold text-[16px] ${
              category === "For You"
                ? "bg-primary text-black" // Active button styles
                : "bg-[#575757] text-white" // Inactive button styles
            }`}
          >
            {category}
          </button>
        ))}

        <button
          className="px-6 py-3 rounded-full font-bold text-[16px] 
                   bg-[#575757] text-black"
        >
          <div className="bg-[#F3CF9F] w-[27px] h-[27px] flex justify-center items-center rounded-full">
            <img src="/assets/ra.svg" alt="" />
          </div>
        </button>
      </div>
    </Container>
  );
};

export default CategoryButtonGroup;
