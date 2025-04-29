import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/usersSlice";

const UserForm = () => {
    const [name,setName] = useState('')
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addUser({name}));
        setName('');
    };

    return (
        <div>
            <input value={name} required onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleAdd}>Add User</button>
        </div>
    )
}

export default UserForm;