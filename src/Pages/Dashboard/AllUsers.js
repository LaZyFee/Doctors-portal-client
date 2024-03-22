import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-ten-iota.vercel.app/users')
            const data = await res.json()
            return data
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://doctors-portal-server-ten-iota.vercel.app/users/admin/${id}`, {
            method: 'PUT',

            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully')
                }
                refetch()
            })
    }

    return (
        <div>
            <h1>All Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs">Make Admin</button>
                                }
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-danger'>Delete</button>
                                </td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;