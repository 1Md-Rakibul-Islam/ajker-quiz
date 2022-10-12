import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='my-5'>Wellcome to our Blog Page</h2>
            <div className="p-20 text-start">
            <ol>
                <li>
                    <h2>what is the purpose of react router?</h2>
                    <ul>
                        <li>
                            Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>how does context api works?</h2>
                    <ul>
                        <li>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.                     
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>what is href hooks in react</h2>
                    <ul>
                        <li>
                            This href attribute contains the URL or path to the destination page. It may be a relative URL or an absolute URL. In React, relative URLs should always be handled by the link tag provided by the React Router, and pure anchor tags should only be used for absolute paths.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
        </div>
    );
};

export default Blog;