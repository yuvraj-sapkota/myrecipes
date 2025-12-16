import { Badge } from "lucide-react";
import ViewRecipeBtn from "../../components/viewRecipeBtn";

const Aboutus = () => {
  const images = [
    {
      id: 1,
      media:
        "https://i.pinimg.com/1200x/b0/f0/4a/b0f04a7fd40fb508181cd813dc8f7896.jpg",
      wrapperClass: "",
      imgClass: "h-[316px]",
    },
    {
      id: 2,
      media:
        "https://i.pinimg.com/736x/ef/ac/2f/efac2fd5f87b773b49709b1609f7999d.jpg",
      wrapperClass: "row-span-2",
      imgClass: "h-full",
    },
    {
      id: 3,
      media:
        "https://i.pinimg.com/736x/cc/e8/ab/cce8ab66b1e45596c379252d87742ecb.jpg",
      wrapperClass: "col-span-2",
      imgClass: "h-[400px]",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-3 gap-6">
        {/* TEXT */}
        <div className="flex flex-col gap-4">
          <Badge text="About us" />
          <h1 className="text-3xl font-bold">Our Culinary Chronicle</h1>
          <p className="text-gray-600">
            Our journey is crafted with dedication, creativity, and an
            unrelenting commitment to delivering delightful culinary
            experiences.
          </p>
          <ViewRecipeBtn text="Read More" />
        </div>

        {images.map((curElem) => (
          <div className={curElem.wrapperClass}>
            <img
              src={curElem.media}
              alt=""
              className={`w-full object-cover rounded-xl ${curElem.imgClass}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
