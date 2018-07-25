// Higher order component - a component that renders another component\
//Render HiJacking
//prop manipulation
//abstract state
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. Please don't share.</p>
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <WrappedComponent {...props}/> || <p>Please get authentication</p>}
        </div>
    )
};
const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="This is some info"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is some info"/>, document.getElementById('app'));