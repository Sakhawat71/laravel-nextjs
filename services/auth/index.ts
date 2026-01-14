"use server";

import { ILoginUser, IRegiUser } from "@/types/auth.type";
import { cookies } from "next/headers";


export const registerUser = async (fromData: IRegiUser) => {
    try {
        const res = await fetch(`${process.env.API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(fromData)
        });

        // console.log(res);

        const data = await res.json();
        if (!res.ok) {
            return {
                success: false,
                message: data.message,
                fieldErrors: data.errors,
            };
        };

        (await cookies()).set('token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
        });

        return {
            success: true,
            data,
        };
    } catch (error: unknown) {
        console.log(error);
    }
};


export const LoginUser = async (loginData: ILoginUser) => {
    try {
        const res = await fetch(`${process.env.API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(loginData)
        });

        const data = await res.json();
        
        if (!data.success) {
            return {
                success: false,
                message: data.message,
                fieldErrors: data.errors,
            };
        };

        (await cookies()).set('token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        return data;

    } catch (error: unknown) {
        console.log(error);
    }
};