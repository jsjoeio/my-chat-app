type HeaderProps = {
  isInputFocused: boolean;
};
function Header({ isInputFocused }: HeaderProps) {
  return (
    <div
      className="sticky block w-full mx-auto w-100 block w-100 bg-slate-200 py-2 border-slate-200 border-b-2"
      style={{ top: isInputFocused ? "47vh" : "0" }}
    >
      <span className="font-bold text-black block">Joe Doe</span>
    </div>
  );
}

export default Header;
