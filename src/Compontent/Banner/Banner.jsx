
const Banner = () => {
    return (
        <div className="w-10/12 mx-auto mt-7">
            <div className="">
                <div
                    className="hero min-h-[70vh] rounded-2xl"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/cDVbk0H/stats-bg.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-80 rounded-2xl"></div>
                    <div className="hero-content text-white text-center">
                        <div className="max-w-full">
                            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;