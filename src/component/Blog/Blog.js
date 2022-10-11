import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='mt-12 container m-auto'>

            <div className="collapse collapse-plus border-2 rounded-xl mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800  text-primary-content peer-checked:bg-purple-700	peer-checked:text-secondary-content font-bold text-xl">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-black text-primary-content peer-checked:	peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse collapse-plus border-2 rounded-xl mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800  text-primary-content peer-checked:bg-purple-700	peer-checked:text-secondary-content font-bold text-xl">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-black text-primary-content peer-checked:	peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse collapse-plus border-2 rounded-xl mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800  text-primary-content peer-checked:bg-purple-700	peer-checked:text-secondary-content font-bold text-xl">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-black text-primary-content peer-checked:	peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse collapse-plus border-2 rounded-xl mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800  text-primary-content peer-checked:bg-purple-700	peer-checked:text-secondary-content font-bold text-xl">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-black text-primary-content peer-checked:	peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;