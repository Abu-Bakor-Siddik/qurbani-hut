"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiGrid, FiHome, FiLogOut, FiMenu, FiUser, FiX } from "react-icons/fi";
import cow from "@/assets/Logo.png";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { href: "/", label: "Home", icon: <FiHome /> },
    { href: "/all-animal", label: "All Animals", icon: <FiGrid /> },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    toast.error("Logged out from the account")
    router.push("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        <Link
          href="/"
          className="text-2xl font-bold text-black flex items-center gap-2">
          <Image src={cow} alt="logo" height={40} width={40} />
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
        {isPending ? (
          <span className="loading loading-spinner loading-sm" />
        ) : user ? (
          <div className="flex items-center gap-2">
            <span className="hidden lg:block text-sm font-medium">
              Hello, <span className="text-primary font-bold">{user.name}</span>
            </span>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full overflow-hidden">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <div className="bg-primary text-primary-content rounded-full w-10 h-10 flex items-center justify-center">
                      <FiUser size={18} />
                    </div>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                <li className="px-3 py-1 text-sm font-semibold opacity-60">
                  {user.name}
                </li>
                <li>
                  <Link href="/my-profile">
                    <FiUser /> My Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-error">
                    <FiLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </div>
        )}

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
            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-error">
                  <FiLogOut /> Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
