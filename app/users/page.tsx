import { UsersTable } from "@/components/modules/users/UsersTable";
import { getUsers } from "@/services/users";

const UsersPage = async () => {

    const user = await getUsers();
    // console.log(user?.data);


    return (
        <div>
            <h1 className="text-3xl">User Page</h1>
            <UsersTable users={user?.data} />
        </div>
    );
};

export default UsersPage;