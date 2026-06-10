"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({
    closeMenu,
    isMobile,
  }: {
    closeMenu?: () => void;
    isMobile?: boolean;
  }) => (
    <>
      {links.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          className={isMobile ? "text-white" : ""}
          asChild
          onClick={closeMenu}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center">
        <Link href="/">
          <Button variant="link" className="text-xl font-bold">
            Emmanuel A.
          </Button>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-2">
            <NavLinks />
          </nav>

          {/*Mobile Menu*/}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                // className={isOpen ? "text-white" : ""}
              >
                {isOpen ? (
                  <X className="stroke-white h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[240px] sm:w-[300px] bg-black"
            >
              <nav className="flex flex-col space-y-2 mt-4">
                <NavLinks closeMenu={() => setIsOpen(false)} isMobile />{" "}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
