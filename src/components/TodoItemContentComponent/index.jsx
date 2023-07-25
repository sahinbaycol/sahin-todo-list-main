import React from 'react';

export default function TodoItemContentComponent({content}){
    return (
        <div>
            <p className="carddescription">{content}</p>
        </div>
    );
}