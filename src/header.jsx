// import frame from "./assets/n.svg";
import mainLogo from "./assets/logo.png";

export default function Header() {
  return (
    <>
      <nav className=" py-7 md:py-4 fixed top-0 w-full bg-[#F5BF42]! z-50">
        <div className="container mx-auto flex items-center justify-around gap-x-6">
          <a href="/">
            <img className="h-[65px]" src={mainLogo} alt="Lws" />
          </a>
        </div>
      </nav>
    </>
  );
}
