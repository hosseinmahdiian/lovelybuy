import React, { useContext } from 'react';
import { reducerContext } from '../../constant/Context';
import Acconut from './Accont';

const Page = () => {
    const reducer = useContext(reducerContext);
    const [reduce, dispach] = reducer;
    return (
        <div>
            <Acconut/>
        </div>
    );
}

export default Page;
