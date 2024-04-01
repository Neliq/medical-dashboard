'use client'

import { LuHome, LuSettings, LuUsers, LuMessageSquare, LuCalendar, LuBriefcase } from "react-icons/lu";
import Link from "next/link"
import { useState } from 'react';
import { motion } from "framer-motion"
import React from "react";

const MenuItem = ({ href, icon, children, selected, setSelected }: { href: string, icon: React.ReactNode, children: React.ReactNode, selected: string, setSelected: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="flex items-center">
      <motion.div animate={selected === href ? { x: [0, -4, 0], transition: { duration: 0.4, ease: "easeInOut" } } : { x: 0 }}>
        <Link href={href}>
          <div
            onClick={() => setSelected(href)}
            className={`w-[219px] h-[64px] flex pl-6 items-center self-stretch gap-3 hover:text-teal-600 ${selected === href ? 'text-teal-600 font-semibold' : 'text-slate-600 font-medium'}`}
          >
            <div className={`flex p-2 justify-center items-center space-x-2 space-y-2 rounded-md ${selected === href ? 'bg-teal-600 border border-slate-200' : 'bg-slate-50 border border-slate-300'}`}>
              {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { color: selected === href ? 'white' : '#475569' }) : null}
            </div>
            {children}
          </div>
        </Link>
      </motion.div>
      <motion.div animate={selected === href ? { scale: [0, 1], transition: { delay: 0.35, duration: 0.3, ease: "easeInOut" } } : { x: 1 }}>
        <div className={`${selected === href ? 'w-[4px] h-[34px] bg-teal-600 rounded' : ''}`}></div>
      </motion.div>
    </div>
  );
};

export default function LeftMenu() {
  const [selected, setSelected] = useState('home');

  const menuItems = [
    { href: "/home", icon: <LuHome size={16} />, label: "Home" },
    { href: "/appointments", icon: <LuBriefcase size={16} />, label: "Appointments" },
    { href: "/messages", icon: <LuMessageSquare size={16} />, label: "Messages" },
    { href: "/calendar", icon: <LuCalendar size={16} />, label: "Calendar" },
    { href: "/patients", icon: <LuUsers size={16} />, label: "Patients" },
  ];

  return (
    <div className="flex w-56 flex-col items-center flex-shrink-0 self-stretch border-r border-slate-300">
      <div className="flex flex-col justify-between items-center flex-grow flex-shrink flex-auto self-stretch rounded-lg shadow-md">
        <div className="flex flex-col items-center self-stretch">
          <div className="flex h-20 py-6 px-6 flex-col items-start space-x-0 space-y-0 self-stretch bg-white">
            <div className="flex p-0 items-center space-x-2 space-y-2 self-stretch bg-white font-semibold text-2xl text-teal-600">
              <Link href='/home' onClick={() => setSelected('/home')}>Dashboard</Link>
            </div>
          </div>
          {menuItems.map(item => (
            <MenuItem key={item.href} href={item.href} icon={item.icon} selected={selected} setSelected={setSelected}>{item.label}</MenuItem>
          ))}
        </div>
        <div className="flex py-6 px-6 flex-col items-start self-stretch bg-white hover:text-teal-600">
          <Link href="/settings">
            <div className="flex p-0 items-center self-stretch gap-2 bg-white">
              <LuSettings/>
              Settings
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}