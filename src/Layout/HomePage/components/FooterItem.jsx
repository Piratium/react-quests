import React from 'react';
const now = new Date();

const FooterItem = () => {
    return (
        <div>
            <p className='text-center mt-5'>&#169; Авторские права мои {now.getFullYear()}</p>
        </div>
    );
}

export default FooterItem;