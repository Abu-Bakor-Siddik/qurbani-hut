import Link from 'next/link';
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import cow from "@/assets/Logo.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Image src={cow} alt="logo" height={40} width={40}></Image>
              <span>Qurbani<span className="text-secondary">Hat</span></span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Your trusted platform for booking quality Qurbani livestock online. We ensure healthy, well-maintained animals delivered to your doorstep.
            </p>
            <div className="flex gap-3">
              <a className="btn btn-ghost btn-circle btn-sm"><FiFacebook size={18} /></a>
              <a className="btn btn-ghost btn-circle btn-sm"><FiTwitter size={18} /></a>
              <a className="btn btn-ghost btn-circle btn-sm"><FiInstagram size={18} /></a>
              <a className="btn btn-ghost btn-circle btn-sm"><FiYoutube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="link link-hover hover:text-primary">Home</Link></li>
              <li><Link href="/all-animal" className="link link-hover hover:text-primary">All Animals</Link></li>
              <li><Link href="/login" className="link link-hover hover:text-primary">Login</Link></li>
              <li><Link href="/register" className="link link-hover hover:text-primary">Register</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-80"> Cows</span></li>
              <li><span className="opacity-80"> Goats</span></li>
              <li><span className="opacity-80"> Sheep</span></li>
              <li><span className="opacity-80"> Camels</span></li>
              <li><span className="opacity-80"> Buffalo</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={16} />
                <span>01812345678</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail size={16} />
                <span>qurbanihat@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider opacity-30"></div>

        <div className="text-center text-sm opacity-60">
          <p> &copy; 2026. QurbaniHat. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;