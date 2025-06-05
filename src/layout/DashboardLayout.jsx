import React, { useState, useEffect,useRef } from 'react';
import { BiHomeAlt, BiLogInCircle, BiSelectMultiple } from "react-icons/bi";
import { MdExplore, MdOfflineBolt, MdPayments, MdPendingActions } from "react-icons/md";
import { GiFigurehead } from "react-icons/gi";
import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import Scroll from '../hooks/useScroll';
import { ToastContainer } from 'react-toastify';
import { useUser } from '../hooks/useUser';
import { IoSchoolSharp } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import { BsFillPostcardFill } from 'react-icons/bs';
import { SiGoogleclassroom, SiInstructure } from 'react-icons/si';
import { TbBrandAppleArcade } from 'react-icons/tb';
import { useAuth } from '../hooks/useAuth';
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';

const adminNavItems = [
    { to: "/dashboard/admin-home", icon: <BiHomeAlt className="text-2xl" />, label: "Dashboard Home" },
    { to: "/dashboard/manage-users", icon: <FaUsers className="text-2xl" />, label: "Manage Users" },
    { to: "/dashboard/manage-class", icon: <BsFillPostcardFill className="text-2xl" />, label: "Manage Class" },
    { to: "/dashboard/manage-applications", icon: <TbBrandAppleArcade className="text-2xl" />, label: "Applications" },
];

const instructorNavItem = [
    { to: "/dashboard/instructor-cp", icon: <FaHome className="text-2xl" />, label: "Home" },
    { to: "/dashboard/add-class", icon: <MdExplore className="text-2xl" />, label: "Add A class" },
    { to: "/dashboard/my-classes", icon: <IoSchoolSharp className="text-2xl" />, label: "My Classes" },
    { to: "/dashboard/my-pending", icon: <MdPendingActions className="text-2xl" />, label: "Pending Classes" },
    { to: "/dashboard/my-approved", icon: <IoMdDoneAll className="text-2xl" />, label: "Approved Classes" },
];

const student = [
    { to: "/dashboard/student-cp", icon: <BiHomeAlt className="text-2xl" />, label: "Dashboard" },
    { to: "/dashboard/enrolled-class", icon: <SiGoogleclassroom className="text-2xl" />, label: "My Enroll" },
    { to: "/dashboard/my-selected", icon: <BiSelectMultiple className="text-2xl" />, label: "My Selected" },
    { to: "/dashboard/my-payments", icon: <MdPayments className="text-2xl" />, label: "Payment History" },
    { to: "/dashboard/apply-instructor", icon: <SiInstructure className="text-2xl" />, label: "Apply for Instructor" },
];

const lastMenuItems = [
    { to: "/", icon: <BiHomeAlt className="text-2xl" />, label: "Main Home" },
    { to: "/trending", icon: <MdOfflineBolt className="text-2xl" />, label: "Trending" },
    { to: "/browse", icon: <GiFigurehead className="text-2xl" />, label: "Following" },
];
///////

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef();
    const inactivityTimer = useRef(null);
    const { loader, logout } = useAuth();
    const { currentUser } = useUser();
    const role = currentUser?.role;

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => Swal.fire('Logged out..!', 'You are logged out.', 'success'))
                    .catch(err => Swal.fire('Error!', err.message, 'error'));
            }
        });
    };

    const handleInteraction = () => {
        if (window.innerWidth < 768) {
            clearTimeout(inactivityTimer.current);
            inactivityTimer.current = setTimeout(() => setOpen(false), 10000);
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleInteraction);
        document.addEventListener('scroll', handleInteraction);
        document.addEventListener('click', handleInteraction);
        return () => {
            document.removeEventListener('mousemove', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
            document.removeEventListener('click', handleInteraction);
        };
    }, []);

    const renderNav = (items) => (
        <ul className="pt-6">
            <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
            {items.map((menuItem, index) => (
                <li key={index} className="mb-2">
                    <NavLink
                        to={menuItem.to}
                        onClick={() => window.innerWidth < 768 && setOpen(false)}
                        className={({ isActive }) =>
                            `flex ${isActive ? "bg-red-500 text-white" : "text-[#413F44]"} duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`
                        }
                    >
                        {menuItem.icon}
                        <span className={`${!open && "hidden"} origin-left duration-200`}>{menuItem.label}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    if (loader) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <HashLoader color="#FF1949" size={50} />
            </div>
        );
    }

    const renderNavItems = (items, includeLogout = false) => (
    <ul className="pt-6">
        {includeLogout && (
            <li>
                <NavLink
                    onClick={handleLogout}
                    className={({ isActive }) =>
                        `flex ${isActive ? "bg-dark-primary-3 text-dark-primary" : "text-[#413F44]"}
                        duration-150 rounded-md p-2 cursor-pointer hover:bg-dark-primary-3
                        font-bold text-sm items-center gap-x-4`
                    }
                >
                    <BiLogInCircle className='text-2xl' />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Logout
                    </span>
                </NavLink>
            </li>
        )}
        {items.map((menuItem, index) => (
            <li key={index} className="mb-2">
                <NavLink
                    to={menuItem.to}
                    className={({ isActive }) =>
                        `flex ${isActive ? "bg-red-500 text-white" : "text-[#413F44]"}
                        duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white
                        font-bold text-sm items-center gap-x-4`
                    }
                >
                    {menuItem.icon}
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        {menuItem.label}
                    </span>
                </NavLink>
            </li>
        ))}
    </ul>
);

    return (
    <div className="flex relative">
        {/* Hamburger Button - Visible on Mobile */}
        <button
            onClick={() => setOpen(!open)}
            className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        >
            <img src="/yoga-logo.png" alt="menu" className="h-6 w-6" />
        </button>

        {/* Sidebar */}
        <div
            className={`fixed  bg-gray-400 md:static top-0 left-0 z-40 h-full transition-all duration-300 bg-dark-purple p-5 
            ${open ? "w-72" : "w-0 md:w-[90px]"} 
            ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
            <div className={`flex gap-x-4 items-center ${!open && "hidden md:flex md:gap-0"}`}>
                <img
                    src='/yoga-logo.png'
                    onClick={() => setOpen(!open)}
                    className={`cursor-pointer h-[40px] duration-100 ${open && "rotate-[360deg]"}`}
                />
                <h1
                    className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${!open && "scale-0"
                        }`}
                    onClick={() => setOpen(!open)}
                >
                    Yoga Master
                </h1>
            </div>

            {/* Sidebar Menu Code */}
            <div className="mt-6 overflow-y-auto h-[85vh] pr-2">
                {role === 'admin' && renderNavItems(adminNavItems)}
                {role === 'instructor' && renderNavItems(instructorNavItem)}
                {role === 'user' && renderNavItems(student)}
                {renderNavItems(lastMenuItems, true)}
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 h-screen overflow-y-auto px-4 md:px-8 pt-4 md:pt-0">
            <Scroll />
            <Outlet />
            <ToastContainer />
        </div>
    </div>
);

};
export default DashboardLayout;
