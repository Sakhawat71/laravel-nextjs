import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserType } from "@/types/user.type";

type UserCardProps = {
    user: UserType
};

type TDateTime = {
    date: string | null,
    time: string | null
};

const UserCard = ({ user }: UserCardProps) => {

    // console.log(user.created_at);

    const getDateAndTime = (dateString: string): TDateTime => {
        if (dateString === null || dateString === undefined) {
            return { date: 'N/A', time: 'N/A' };
        };
        const date = new Date(dateString)?.toDateString();
        const time = new Date(dateString)?.toLocaleTimeString();
        return { date, time };
    };


    return (
        <Card>
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardFooter>
                <p>
                    Created: {getDateAndTime(user.created_at).date} at {getDateAndTime(user.created_at).time}
                </p>
            </CardFooter>
            <CardContent>
                <p>
                    Updated: {getDateAndTime(user.updated_at).date} at {getDateAndTime(user.updated_at).time}
                </p>
            </CardContent>
        </Card>
    );
};

export default UserCard;