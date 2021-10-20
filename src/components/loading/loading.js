import React from 'react';
import ReactLoading from 'react-loading';
import './loading.css'

const Loading = () => (
    <div className="full">
        <ReactLoading className="to-center" type="spin" color="#ffffff" height={'10%'} width={'10%'} />
    </div>
);

export default Loading;