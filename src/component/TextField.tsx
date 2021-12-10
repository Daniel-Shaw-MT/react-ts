
import React from 'react'

interface Props {
    DefaultText: string;
    disabled?: boolean;
}

export const TextField: React.FC<Props> = ({
    DefaultText,
    disabled
}) => {
    return (
        <div>
            <input
            placeholder={DefaultText}
            disabled={disabled || false}></input>
        </div>
    )
};

export default TextField
