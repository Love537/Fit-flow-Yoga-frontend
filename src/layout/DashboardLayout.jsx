import React, { useState, useEffect } from 'react';
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

const DashboardLayout = () => {
    const [open, setOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { loader, logout } = useAuth();
    const { currentUser } = useUser();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const timer = setTimeout(() => setOpen(false), 10000);
            return () => clearTimeout(timer);
        }
    }, [open, isMobile]);

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
                    .then(() => Swal.fire('Logged out..!', 'You are logged outed.', 'success'))
                    .catch((err) => Swal.fire('Error!', err.message, 'error'))
            }
        });
    };

    const role = currentUser?.role;

    if (loader) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color="#FF1949" size={50} />
        </div>
    }

    const renderNavItems = (items) => items.map(({ to, icon, label }, index) => (
        <li key={index} className="mb-2">
            <NavLink to={to} className={({ isActive }) =>
                `flex ${isActive ? "bg-red-500 text-white" : "text-[#413F44]"} duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`}> 
                {icon}
                <span className={`${!open && "hidden"} origin-left duration-200`}>{label}</span>
            </NavLink>
        </li>
    ));

    return (
        <div className="flex h-screen">
            <div className={`${open ? "w-72" : "w-[90px]"} bg-green-50 h-full p-5 pt-8 duration-300 fixed md:relative z-50 ${isMobile ? "absolute" : "block"}`}>
                <div className="flex gap-x-4 items-center mb-4">
                    <img src='/yoga-logo.png' onClick={() => setOpen(!open)} className={`cursor-pointer h-[40px] duration-500 ${open && "rotate-[360deg]"}`} />
                    <h1 onClick={() => setOpen(!open)} className={`text-dark-primary font-bold text-xl duration-200 ${!open && "scale-0"}`}>Yoga Master</h1>
                </div>

                {role === 'admin' && <ul>{renderNavItems(adminNavItems)}</ul>}
                {role === 'instructor' && <ul>{renderNavItems(instructorNavItem)}</ul>}
                {role === 'user' && <ul>{renderNavItems(student)}</ul>}

                <ul className="pt-6">
                    <p className={`ml-3 uppercase text-light-gray-4 ${!open && "hidden"}`}><small>Useful Links</small></p>
                    {renderNavItems(lastMenuItems)}
                    <li>
                        <button onClick={handleLogout} className="flex text-[#413F44] duration-150 rounded-md p-2 w-full hover:bg-dark-primary-3 font-bold text-sm items-center gap-x-4">
                            <BiLogInCircle className='text-2xl' />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="flex-1 ml-0 md:ml-[288px] overflow-y-auto bg-white px-4 sm:px-6 md:px-8">
                <Scroll />
                <Outlet />
                <ToastContainer />
            </div>
        </div>
    );
};

export default DashboardLayout;
