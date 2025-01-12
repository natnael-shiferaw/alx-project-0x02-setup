// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '@/interfaces';
import Header from '../layout/Header';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <>
            <div className="p-4 border rounded-lg shadow-md shadow-emerald-500 bg-white text-gray-800 w-full md:w-80">
                <h2 className="font-semibold text-xl mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">Email: {email}</p>
                <p className="text-gray-600">
                    Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
                </p>
                <p className="text-gray-600 mt-2">
                    Geo: Lat {address.geo.lat}, Lng {address.geo.lng}
                </p>
            </div>
        </>
    );
};

export default UserCard;
