/* eslint-disable no-useless-constructor */
import React from "react";
// import JSXBaseDemo from './jsxBaseDemo'
// import ConditionDemo from "./conditionDemo";
import ListDemo from "./listDemo";

class BaseUse extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <>
            {/* <JSXBaseDemo /> */}
            {/* <ConditionDemo /> */}
            <ListDemo />
        </>
    }
}

export default BaseUse
