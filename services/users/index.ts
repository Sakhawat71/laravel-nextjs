"use server";

export const getUsers = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/users`,{
            method: 'GET',
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }
        return await res.json();
    } catch (error) {
        console.log(error);
    };
};