const Badge = ({ text }) => {
  return (
    <>
      <button className="bg-[#ee6352] text-white px-4 py-1 rounded-xl uppercase">
        {text}
      </button>
    </>
  );
};

export default Badge;
