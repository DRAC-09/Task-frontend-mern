import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex flex-col md:flex-row items-center md:justify-between text-white p-2 md:px-28 shadow-md shadow-red-500">
      <p className="text-center text-sm">&copy; 2023 Task Manager.</p>
      <div className="flex text-2xl  mt-1 space-x-4">
        <a href="https://www.facebook.com/" target="Blank">
          <CiFacebook />
        </a>
        <a href="https://twitter.com/" target="Blank">
          <CiTwitter />
        </a>
        <a href="https://www.instagram.com/" target="Blank">
          <CiInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
