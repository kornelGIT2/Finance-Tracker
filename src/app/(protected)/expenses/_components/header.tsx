const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <h1 className="text-4xl text-white  p-10 rounded-lg flex justify-center">
        <span>
          {" "}
          Total <span className="text-green-200">{children}</span> $
        </span>
      </h1>
    </main>
  );
};
export default Header;
