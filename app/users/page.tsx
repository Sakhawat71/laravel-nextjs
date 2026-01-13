import { getUsers } from "@/services/users";

const UsersPage = async () => {

    const user = await getUsers();
    console.log(user?.data);


    return (
        <div>
            <h1 className="text-3xl">User Page</h1>
        </div>
    );
};

export default UsersPage;