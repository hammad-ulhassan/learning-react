import React from 'react';

const withSmallClass = (WrappedComponent, className)=>{
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
}

export default withSmallClass;
/**
 * it is not a functional component, but a function that returns a funcitonal
 * component. this is why we can keep its name starting with small letter.
 */