import React from 'react'

interface Props {
    text: string;
}

export const Label: React.FC<Props> = ({
    text,
    
}) => {
    return (
        <div>
            <p className="label"
            
            >
                {text}
            </p>
        </div>
    )
}

export default Label
