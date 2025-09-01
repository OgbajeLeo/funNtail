import notFound from "../assets/Notfound.svg";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
const NotFound = () => {
    return (<>
      <Navbar />
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={notFound} alt="notFound" className="size-[200px] lg:size-[440px] " />
      <h1 className="text-xl lg:text-[32px] text-gray_text3 font-semibold">
        Page Under Construction
      </h1>
      <p className="text-base lg:text-lg text-gray_text2 text-center font-normal">
        This page is getting a proper refresh. You’ll be the first to know once
        it’s live.
      </p>
        </div>
    <Footer />
      </>
  );
};

export default NotFound;
