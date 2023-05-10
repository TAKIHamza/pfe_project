import Sectionteam from "../component/sectionteam";
import NavBarr from "../component/Navbar";
import Footer from "../component/footer";

const About =()=>{
    return(
        <div>
        <NavBarr/>
        <div className="relative bg-deep-purple-accent-400 h-screen lg:mt-3" >
            <div className="bg-[url(https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]  bg-cover    bg-center  bg-no-repeat w-full h-screen"></div>

      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      </div>
      <Sectionteam/>
      <Footer/>
      </div>
    );
}
export default About