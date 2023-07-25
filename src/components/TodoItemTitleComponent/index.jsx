import React from 'react';

export default function TodoItemTitleComponent({title}){
    return (
        <div>
            <h1 className="cardheader">{title}</h1>
        </div>
    );
}