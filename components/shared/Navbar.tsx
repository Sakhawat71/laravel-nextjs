"use client";

import { Button } from "../ui/button";
import { HomeIcon, LogInIcon, } from "lucide-react";
import Link from "next/link";


export const Navbar = () => {

    return (
        <header className="border-b w-full bg-slate-300">
            <div className="container flex justify-between items-center mx-auto h-16 px-3">
                <Link href="/" className="text-2xl font-black flex items-center">
                    Sakhawat
                </Link>

                <nav className="flex gap-2">
                    <Link href="/">
                        <Button variant="outline">
                            <HomeIcon />
                        </Button>
                    </Link>


                    <Button
                        // onClick={() => signIn()}
                        variant="outline"
                        className="flex items-center"
                    >
                        <LogInIcon /> Login
                    </Button>

                </nav>
            </div>
        </header>
    );
};