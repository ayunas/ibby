import React from 'react';

function Step({step}) {
    return (
        <p class="number">{step && step.number}</p>
    )
}

export default Step;