const Header = () => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-2xl">
        Hello <br /> <span className="text-3xl font-semibold">Sarthak👋</span>
      </h1>
      <button className="px-4 py-3 bg-red-800 rounded-md text-sm font-semibold ">
        Log Out
      </button>
    </div>
  );
};

export default Header;
