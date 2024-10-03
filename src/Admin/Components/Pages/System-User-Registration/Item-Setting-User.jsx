import React from 'react';
import { BiCheck } from 'react-icons/bi';

const ItemSettingUser = () => {
    return (
        <div className='flex items-center gap-4 my-2'>
            <BiCheck className=' border rounded-md '/>
            <h2>مامور توضیع </h2>
        </div>
    );
}

export default ItemSettingUser;
