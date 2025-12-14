const ViewRecipeBtn = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-black rounded-full px-4 py-1 uppercase w-full md:w-fit text-center ${className}`}
    >
      {text}
    </button>
  );
};

export default ViewRecipeBtn;
