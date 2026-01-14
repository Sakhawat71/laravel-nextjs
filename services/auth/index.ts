"use server";

import { IRegiUser } from "@/types/auth.type";


export const register = async (regiData: IRegiUser) => {
    try {
        const res = await fetch(`${process.env.API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ regiData })

        });
        if (!res.ok) {
            throw new Error("Failed to register user");
        }
        return await res.json();
    } catch (error: unknown) {
        console.log(error);
    }
};