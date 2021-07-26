import React from 'react';
import { useSelector } from 'react-redux';
import "./loading.scss";

function Loading(props) {
    const status = useSelector((state) => state.Loading)
    return (
        <div className="lds-ellipsis" style={{ display: status ? 'block' : 'none' }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Loading;