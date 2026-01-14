"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { LoginUser } from "@/services/auth";
import { ILoginUser } from "@/types/auth.type";
import toast from "react-hot-toast";

export const LoginForm = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => {

    const [showPassword, setShowPassword] = useState(false);
    const form = useForm({});
    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit: SubmitHandler<ILoginUser> = async (data) => {
        // console.log("Login data:", data);
        const res = await LoginUser(data);
        // console.log(res);
        const toastId = toast.loading('Loading...');
        if (res?.success) {
            toast.success(res.message || "Login successful!", { id: toastId });
            // router.push('/dashboard')
        } else {
            toast.error(res?.message || "Login failed!", { id: toastId });
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl text-center">Login</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="email">Email</Label>
                                        <FormControl>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="mail@example.com"
                                                {...field}
                                                required
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                        </div>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    id="password"
                                                    placeholder="Password"
                                                    type={showPassword ? "text" : "password"}
                                                    {...field}
                                                    required
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                className="absolute right-3 top-2 text-gray-500"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Logging in..." : "Login"}
                            </Button>

                            {/* Link to Register */}
                            <div className="text-center text-sm">
                                Don`t have an account?{" "}
                                <Link href="/register" className="underline underline-offset-4 hover:text-primary">
                                    Register
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};