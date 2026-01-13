import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserType } from "@/types/user.type";

type UserCardProps = {
    user: UserType
};

const UserCard = ({ user }: UserCardProps) => {

    console.log(user);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
};

export default UserCard;