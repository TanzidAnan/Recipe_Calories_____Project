
const Banner = () => {
    return (
        <div className=" mt-7">
            <div className="">
                <div
                    className="hero min-h-[70vh] rounded-2xl"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/cDVbk0H/stats-bg.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-80 rounded-2xl"></div>
                    <div className="hero-content text-white text-center">
                        <div className="max-w-[65%]">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Discover an exceptional cooking  class tailored for you!</h1>
                            <p className="mb-5">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding  problems to become an exceptionally well world-class Programmer.
                            </p>
                            <div className="flex gap-7 justify-center">
                            <button className="btn bg-slate-900 text-white hover:bg-white hover:text-black">Explore Now</button>
                            <button className="btn bg-slate-50 text-black hover:text-white">Our Feedback</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;