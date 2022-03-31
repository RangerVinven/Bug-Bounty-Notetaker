import React from 'react';

interface props {
    title: string
}

const Title = (props: props) => {
    return(
        <h1 className="text-3xl font-bold">{props.title}</h1>
    );
}

export default Title;