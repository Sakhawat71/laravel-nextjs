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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

export const RegisterForm = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => {

    const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const form = useForm({});
    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            console.log("Register data:", data);

            // Check if passwords match
            if (data.password !== data.password_confirmation) {
                console.error("Passwords don't match");
                return;
            }

            // TODO: Call your register API
            // const response = await register(data.name, data.email, data.password, data.password_confirmation);

        } catch (err: unknown) {
            console.error(err);
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl text-center">Register</CardTitle>
                    <CardDescription className="text-center">
                        Create a new account to get started
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="name">Full Name</Label>
                                        <FormControl>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                {...field}
                                                required
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

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
                                        <Label htmlFor="password">Password</Label>
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

                            {/* Confirm Password */}
                            {/* <FormField
                                control={form.control}
                                name="password_confirmation"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    id="password_confirmation"
                                                    placeholder="Confirm Password"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    {...field}
                                                    required
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                className="absolute right-3 top-2 text-gray-500"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}

                            {/* Submit Button */}
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Creating account..." : "Register"}
                            </Button>

                            {/* Link to Login */}
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};