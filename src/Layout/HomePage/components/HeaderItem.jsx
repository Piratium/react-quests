import React from 'react';

const HeaderItem = (props) => {
    return (
        <div>
            <h1 className='text-center mb-5'>
                {props.headerText}
            </h1>
        </div>
    );
}

export default HeaderItem;