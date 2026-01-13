"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { BookOpen } from "lucide-react";
import { UserType } from "@/types/user.type";
import Link from "next/link";

interface UsersTableProps {
    users: UserType[]
}

export const UsersTable = ({ users }: UsersTableProps) => {


    return (
        <div className="w-full overflow-x-auto">
            <Table className="">
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users?.map((users) => (
                        <TableRow key={users.id}>
                            <TableCell className="font-medium">{users.id}</TableCell>
                            <TableCell className="font-medium">{users.name}</TableCell>
                            <TableCell className="space-x-1">
                                {users.email}
                            </TableCell>
                            <TableCell className="flex gap-2">
                                <Link
                                    href={`/users/${users.id}`}
                                    className="p-2 rounded-md hover:bg-slate-300 transition"
                                >
                                    <BookOpen className="w-4 h-4" />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}