import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios.get('https://transactions-kxx7.onrender.com/api/v1/user/bulk?filter=' + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])


    return <>
        <div className="mt-6 text-lg font-bold">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map((user, index) => <User user={user} key={index} />)}
        </div>
    </>
}

function User({ user }) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="flex justify-center w-12 h-12 mt-1 mr-2 rounded-full bg-slate-200">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
                <div className="font-semibold">
                    @{user.username}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate('/send?id=' + user._id + '&name=' + user.firstName)
            }} label={"Send Money"} />
        </div>
    </div>
}