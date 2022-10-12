import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='my-20 container m-auto'>

            <div className="collapse collapse-plus border-2 rounded-xl mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800  text-primary-content peer-checked:bg-purple-700	peer-checked:text-secondary-content font-bold text-xl">
                    what is the purpose of react router?
                </div>
                <div className="collapse-content bg-black text-primary-content peer-checked:	peer-checked:text-secondary-content">
                    <p> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application <br /> When a user types a specific URL into the browser <br /> and if this URL path matches any route inside the router file <br /> the user will be redirected to that particular route.

                    </p>
                </div>
            </div>

            <div className="collapse collapse-plus border-2 rounded-xl mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800  text-primary-content peer-checked:bg-purple-700	peer-checked:text-secondary-content font-bold text-xl">
                    how how does context api works?
                </div>
                <div className="collapse-content bg-black text-primary-content peer-checked:	peer-checked:text-secondary-content">
                    <p>context api
                        React is a way for applications to effectively create global variables that can be passed around <br /> This is an alternative to prop drilling or moving props from grandparents to children's parents.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-plus border-2 rounded-xl mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800  text-primary-content peer-checked:bg-purple-700	peer-checked:text-secondary-content font-bold text-xl">
                    React useRef Hook
                </div>
                <div className="collapse-content bg-black text-primary-content peer-checked:	peer-checked:text-secondary-content">
                    <p>useRef is like a box
                        The UseRef Hook allows you to persist values ​​between renders. It can be used to store a mutable value that does not cause re-rendering when updated <br />
                        The returned object will persist for the full lifetime of the component <br />
                        It can be used to directly access a DOM element.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;