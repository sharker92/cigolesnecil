'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useMemo, ReactNode } from 'react';
import { FaHome, FaFileInvoiceDollar, FaScroll, FaCog } from 'react-icons/fa';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { FaBrain } from 'react-icons/fa6';
import { IoMdPeople } from 'react-icons/io';
import { MdAutorenew, MdUpload } from 'react-icons/md';
import { PiFlowArrow } from 'react-icons/pi';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavLink {
  id: string;
  text: string;
  path: string;
  icon: ReactNode;
  subLinks?: NavLink[];
}

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const links: NavLink[] = useMemo(
    () => [
      { id: 'insights', text: 'Insights', path: '/insights', icon: <FaHome /> },
      {
        id: 'vendors',
        text: 'Vendors',
        path: '/vendors',
        icon: <LiaFileInvoiceSolid />,
        subLinks: [
          {
            id: 'applications',
            text: 'Applications',
            path: '/applications',
            icon: <FaScroll />,
          },
          {
            id: 'contracts',
            text: 'Contracts',
            path: '/contracts',
            icon: <FaScroll />,
          },
          {
            id: 'invoices',
            text: 'Invoices',
            path: '/invoices',
            icon: <FaFileInvoiceDollar />,
          },
          {
            id: 'priceinteligence',
            text: 'Price Inteligence',
            path: '/price-intelligence',
            icon: <FaBrain />,
          },
        ],
      },
      {
        id: 'employees',
        text: 'Employees',
        path: '/employees',
        icon: <IoMdPeople />,
      },
      {
        id: 'renewals',
        text: 'Renewals',
        path: '/renewals',
        icon: <MdAutorenew />,
      },
      {
        id: 'workflows',
        text: 'Workflows',
        path: '/workflows',
        icon: <PiFlowArrow />,
      },
    ],
    [],
  );

  useEffect(() => {
    const parentLink = links.find((link) =>
      link.subLinks?.some((subLink) => pathname.startsWith(subLink.path)),
    );
    if (parentLink) {
      setOpenSubmenu(parentLink.id);
    }
  }, [pathname, links]);

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
      >
        {isMobileOpen ? (
          <FiX className="text-xl" />
        ) : (
          <FiMenu className="text-xl" />
        )}
      </button>
      <nav
        className={`w-64 fixed h-screen bg-white dark:bg-gray-900 shadow-lg flex flex-col transition-transform duration-300 transform
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-40`}
      >
        <div className="py-6 px-4">
          <div className="h-10 w-full flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              License Logic Logo
            </span>
            {/* <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="h-8 w-auto" 
          /> */}
          </div>
        </div>
        <button
          className="flex items-center gap-3 p-4 mx-4 my-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          onClick={() => {
            //INFO: upload document logic here
          }}
        >
          <MdUpload className="text-lg" />
          Upload Documents
        </button>
        <div className="flex-1 overflow-y-auto">
          {links.map((link) => (
            <div key={link.id}>
              {'subLinks' in link ? (
                <>
                  <button
                    onClick={() =>
                      setOpenSubmenu(openSubmenu === link.id ? null : link.id)
                    }
                    className={
                      'flex items-center justify-between w-full p-4 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs mr-2">
                        {openSubmenu === link.id ? '▼' : '▶'}
                      </span>
                      {link.icon}
                      {link.text}
                    </div>
                  </button>

                  {openSubmenu === link.id && (
                    <div className="ml-8">
                      {link.subLinks?.map((subLink) => (
                        <Link
                          key={subLink.id}
                          href={subLink.path}
                          className={`flex items-center gap-3 p-3 text-sm transition-colors ${
                            pathname === subLink.path
                              ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          {subLink.icon}
                          {subLink.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.path}
                  className={`flex items-center gap-3 p-4 transition-colors ${
                    pathname === link.path
                      ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.icon}
                  {link.text}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <Link
              href="/settings"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              <FaCog className="text-xl" />
              <span className="sr-only">Settings</span>
            </Link>
          </div>
        </div>
      </nav>
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}

