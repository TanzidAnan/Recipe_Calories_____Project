const Navber = () => {
    return (
        <div className="">
            <div className="navbar bg-white text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Recipe <span className="text-orange-400 font-extrabold">Calories</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-left">
                        <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://i.ibb.co.com/D4zJvR4/7e8a612e2aaedfcf.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;