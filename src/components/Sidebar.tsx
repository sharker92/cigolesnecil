"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaHome, FaFileInvoiceDollar, FaScroll } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaBrain } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { MdAutorenew, MdUpload } from "react-icons/md";
import { PiFlowArrow } from "react-icons/pi";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const links = [
    { id: "insights", text: "Insights", path: "/", icon: <FaHome /> },
    {
      id: "vendors",
      text: "Vendors",
      path: "/",
      icon: <LiaFileInvoiceSolid />,
      subLinks: [
        {
          id: "applications",
          text: "Applications",
          path: "/",
          icon: <FaScroll />,
        },
        { id: "contracts", text: "Contracts", path: "/", icon: <FaScroll /> },
        {
          id: "invoices",
          text: "Invoices",
          path: "/",
          icon: <FaFileInvoiceDollar />,
        },
        {
          id: "priceinteligence",
          text: "Price Inteligence",
          path: "/",
          icon: <FaBrain />,
        },
      ],
    },
    { id: "employee", text: "Employee", path: "/", icon: <IoMdPeople /> },
    { id: "renewals", text: "Renewals", path: "/", icon: <MdAutorenew /> },
    { id: "workflows", text: "Workflows", path: "/", icon: <PiFlowArrow /> },
  ];

  return (
    <nav className="w-64 fixed h-screen bg-white shadow-lg flex flex-col">
      <div className="py-6 px-4">
        <div className="h-10 w-full flex items-center justify-center">
          <span className="text-xl font-bold text-gray-800">License Logic Logo</span>
          {/* <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="h-8 w-auto" 
          /> */}
        </div>
      </div>
      <button
        className="flex items-center gap-3 p-4 mx-4 my-4 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
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
            {"subLinks" in link ? (
              <>
                <button
                  onClick={() =>
                    setOpenSubmenu(openSubmenu === link.id ? null : link.id)
                  }
                  className={'flex items-center justify-between w-full p-4 text-gray-600 hover:bg-gray-50'}
                >
                  <div className="flex items-center gap-3">
                  <span className="text-xs mr-2">
                  {openSubmenu === link.id ? "▼" : "▶"}
                  </span>
                    {link.icon}
                    {link.text}
                  </div>
                </button>

                {openSubmenu === link.id && (
                  <div className="ml-8">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.id}
                        href={subLink.path}
                        className={`flex items-center gap-3 p-3 text-sm ${
                          pathname === subLink.path
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
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
                className={`flex items-center gap-3 p-4 ${
                  pathname === link.path
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.icon}
                {link.text}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

