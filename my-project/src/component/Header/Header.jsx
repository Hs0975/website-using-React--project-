import React from "react";
import { Link, NavLink } from "react-router-dom"


// const sum = (a, b) => a+b //arrow function
// ({ isActive }) =>  `classes`

// block => multiline code

// console.log(sum(1,3)) //undefined

// p = padding
// m = margin
// mx = margin on x axis (left and right)
// my = margin on y axis (top and bottom)
// ml = margin on left 
// mr = margin on right 
// mt = margin on top;
// mb = margin on bottom;
// px = margin on x axis (left and right)
// my = margin on y axis (top and bottom)
// ml = margin on left 
// mr = margin on right 
// mt = margin on top;
// mb = margin on bottom;
// flex = display: flex;


// notattion : "screen-size:class-to-be-applied" => example > lg:flex sm:block md:inline => Equivalted to media query max-width

// shadow = box-shadow: 1px 1px ; 
// sticky = position: sticky;
// z-50 = z-index: 50;
// top-0 = top: 0;
// left-0 = left: 0;
// items-center : align-items: center;
// a , b => flex => brower => first a then b > tu order change krke b da order krta 0 then
// brower => first b then a
//x , y , z 
//#elemeny:hover {

// }

//button, banner/pop-up jehri cheej mure aa rhi aa oda z index zyada a

// example: z-index of button is 10 let's say, and z index of pop up is 20, then button will go behind popup;
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                    <NavLink to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    GitHub
                                </NavLink>

                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/" className={({ isActive }) => {
                                        console.log({isActive})
                                        return `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>


                            <li>
                                <NavLink to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}