import UserCard from "@/components/modules/users/UserCard";
import { getUserById } from "@/services/users";

interface UserDetailsPageProps {
    params: Promise<{ id: string }>
};


const UserDetailsPage = async ({ params }: UserDetailsPageProps) => {

    const { id } = await params;
    const {data} = await getUserById(id);

    console.log(data);

    return (
        <div className="max-w-5xl mx-auto my-8 p-8 bg-slate-200 rounded-lg">
            <UserCard />
        </div>
    );
};

export default UserDetailsPage;