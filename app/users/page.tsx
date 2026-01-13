import { UsersTable } from "@/components/modules/users/UsersTable";
import { getUsers } from "@/services/users";

const UsersPage = async () => {

    const user = await getUsers();
    // console.log(user?.data);


    return (
        <div className="p-8 space-y-6 max-w-5xl bg-slate-200 mx-auto my-8 rounded-lg">
            <h1 className="text-3xl text-center">User Page</h1>
            <UsersTable users={user?.data} />
        </div>
    );
};

export default UsersPage;