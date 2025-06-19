import React from 'react';
import { Fugaz_One } from 'next/font/google';
const fugaz = Fugaz_One({variable: "--font-inter", subsets: ["latin"], weight: ['400']});

interface ButtonProps {
  text: string;
  dark?: boolean;
  full?: boolean; // Added missing prop
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  className?: string;
}

export default function Button({
  text,
  dark = false,
  full,
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-blue-600 ${
          (dark ? 'text-white bg-blue-600 border-blue-700' : 'text-blue-600 ') +
          (full ? 'grid place-items-center w-full ' : ' ')
      } ${className}`}
    >
        <p className='px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 font-semibold'>{text}
        </p>
    </button>
  );
}
