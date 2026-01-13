"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

export interface UserType {
    id: string
    name : string
    email:string
    created_at: string
    updated_at: string
};

interface UsersTableProps {
    users: UserType[]
}

export const UsersTable = ({
    users,
}: UsersTableProps) => {
    return (
        <div className="w-full overflow-x-auto">
            <Table className="">
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Tech Stack</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users?.map((users) => (
                        <TableRow key={users.id}>
                            <TableCell className="font-medium">{users.name}</TableCell>
                            <TableCell className="space-x-1">
                                {users.email}
                            </TableCell>
                            <TableCell className="flex gap-2">
                                <Button size="icon" variant="ghost">
                                    <PencilIcon className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="ghost">
                                    <TrashIcon className="w-4 h-4 text-red-500" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}