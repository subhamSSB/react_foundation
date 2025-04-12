import React from "react"
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1>Namaste React </h1>
}

const HeadingComponent = () => (
    <div>
        <Title/>
        <h1>Namaste React Functional Components</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>)