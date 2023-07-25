import React from 'react';

export default function TodoItemSubtitleComponent({subtitle}){
    return (
        <div>
            <p className="cardsubheader">{subtitle}</p>
        </div>
    );
}