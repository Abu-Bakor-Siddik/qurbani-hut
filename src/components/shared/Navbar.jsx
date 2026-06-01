"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiGrid, FiHome, FiLogOut, FiMenu, FiUser, FiX } from "react-icons/fi";
import cow from "@/assets/Logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <FiHome /> },
    { href: "/all-animal", label: "All Animals", icon: <FiGrid /> },
    { href: "/my-profile", label: "My Profile", icon: <FiUser /> },
  ];

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        <Link
          href="/"
          className="text-2xl font-bold text-black flex items-center gap-2">
          <Image src={cow} alt="logo" height={40} width={40}></Image>
          <span>
            Qurbani<span className="text-red-600">Hat</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center gap-2 font-medium ${
                  pathname === link.href
                    ? "text-primary font-bold"
                    : "hover:text-primary"
                }`}>
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-10">
                <span className="text-sm">Image</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/login" className="btn btn-ghost btn-sm">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary btn-sm">
            Register
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-base-100 shadow-lg z-50">
          <ul className="menu p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 ${
                    pathname === link.href ? "text-primary font-bold" : ""
                  }`}>
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
            <>
              <li>
                <button className="flex items-center gap-2 text-error">
                  <FiLogOut /> Sign Out
                </button>
              </li>
            </>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
