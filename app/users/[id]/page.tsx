import NotFound from "@/app/not-found";
import UserCard from "@/components/modules/users/UserCard";
import { getUserById } from "@/services/users";

interface UserDetailsPageProps {
    params: Promise<{ id: string }>
};


const UserDetailsPage = async ({ params }: UserDetailsPageProps) => {

    const { id } = await params;
    const data = await getUserById(id);
    if (!data || !data.data) return NotFound();
    // console.log(data);

    return (
        <div className="w-full md:w-1/4 mx-auto my-8 p-8 bg-slate-200 rounded-lg text-center">
            <UserCard user={data.data} />
        </div>
    );
};

export default UserDetailsPage;