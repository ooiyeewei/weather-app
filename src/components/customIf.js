import React from "react";

const Check = (props) => {
    return (
        <React.Fragment>
            {!!props.if && props.children}
        </React.Fragment>
    );
};

export default Check;
