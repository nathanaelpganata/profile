import React from "react";
import Navigation from "./Navigation";
import { LayoutProps } from "@/types/entities/layout";

const Layout = ({ children }: LayoutProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleShowNav = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <div className={`min-h-screen bg-slate-900 overflow-x-hidden`}>
            {isOpen && (
                <div
                    className="min-h-screen absolute z-50 bg-black bg-opacity-70 w-full"
                    onClick={toggleShowNav}
                ></div>
            )}
            <Navigation isOpen={isOpen} toggleShowNav={toggleShowNav} />
            {children}
        </div>
    );
};

export default Layout;
