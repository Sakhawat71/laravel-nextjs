import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-extrabold text-gray-800 tracking-tight">404</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Oops!😒 The page you’re looking for doesn’t exist or has been moved.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link href="/">
                        <Button className="flex items-center gap-2">
                            <HomeIcon className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline">
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}