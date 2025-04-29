import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../features/users/usersSlice";

const FetchUsers = () => {
    const dispatch = useDispatch()
    const deleteDispatch = useDispatch()
    const {data: users, status } = useSelector((state) => state.users)

    useEffect(()=>{
        dispatch(fetchUsers());
    }, [dispatch])

    

    if(status === "loading") return <p className="loader"></p>
    if(status === "failed" ) return <p>Error loading users.</p>

    return(
        <ul>
            {
                users.map((user) => (
                    <li key={user.id}><span><input type="button" value={`delete`} onClick={() => dispatch(deleteUser(user.id))} name="name"  id={user.id }></input></span>{user.name}</li>
                ))
            }
        </ul>
    )
}

export default FetchUsers