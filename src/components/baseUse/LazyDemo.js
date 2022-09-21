import React from "react";

const ContextDemo = React.lazy(() => import('./ContextDemo'))

class LazyDemo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <p>引入一个动态组件</p>
            <hr />
            <React.Suspense fallback={<div>Loading...</div>}>
                <ContextDemo />
            </React.Suspense>
        </div>
    }
}

export default LazyDemo