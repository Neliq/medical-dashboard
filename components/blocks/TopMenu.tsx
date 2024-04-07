'use client'

import { LuHome, LuSettings, LuUsers, LuMessageSquare, LuCalendar, LuBriefcase } from "react-icons/lu";
import Link from "next/link"
import { useState } from 'react';
import { motion } from "framer-motion"
import React from "react";

const MenuItem = ({ href, children, selected, setSelected, disabled }: { href: string, children: React.ReactNode, selected: string, setSelected: React.Dispatch<React.SetStateAction<string>>, disabled?: boolean }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    } else {
      setSelected(href);
    }
  };

  return (
    <div className="al-ver al-5 gap-2">
      <motion.div animate={selected === href ? { x: [0, -4, 0], transition: { duration: 0.4, ease: "easeInOut" } } : { x: 0 }}>
        <Link href={href}>
          <div
            onClick={handleClick}
            className={`al-5 gap-3 ${disabled ? 'text-slate-300' : selected === href ? 'text-teal-600 font-semibold' : 'text-slate-600 font-medium hover:text-teal-600'}`}
          >
            {children}
          </div>
        </Link>
      </motion.div>
      <motion.div animate={selected === href ? { scale: [0, 1], transition: { delay: 0.35, duration: 0.3, ease: "easeInOut" } } : { x: 1 }}>
        <div className={`${selected === href ? 'w-[32px] h-[4px] bg-teal-600 rounded' : ''}`}></div>
      </motion.div>
    </div>
  );
};

interface TopMenuProps {
  page: string;
}

export default function TopMenu({ page }: TopMenuProps) {
  const [selected, setSelected] = useState(page);

  const menuItems = [
    { href: "/appointments/patient", label: "Patient", disabled: false },
    { href: "/appointments/ai", label: "AI Helper", disabled: false },
    { href: "/appointments/prescribtion", label: "Prescribtion", disabled: false },
    { href: "/appointments/papers", label: "Papers", disabled: false },
  ];

  return (
    <div className="al-1 gap-16">
      {menuItems.map(item => (
        <MenuItem key={item.href} href={item.href} selected={selected} setSelected={setSelected} disabled={item.disabled}>{item.label}</MenuItem>
      ))}
    </div>
  );
}