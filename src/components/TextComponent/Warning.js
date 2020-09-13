import React from 'react';
import Text from "./text.styled";

const Warning = ({message, classValue}) => {
    return ( 
        <Text warning className={classValue}>
            {message}
        </Text>
     );
}
 
export default Warning;