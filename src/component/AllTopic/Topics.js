import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom';
import TopicsCart from './TopicsCart/TopicsCart';


const Topics = () => {
    const singTopics = useLoaderData();
    const singTopic = singTopics.data;

    return (
        <div>
            <div className='grid  my-32 md:grid-cols-2  lg:grid-cols-4 gap-8 justify-items-center'>

                {
                    singTopic.map(st => <TopicsCart key={st.id} st={st} />)
                }

            </div>

        </div>
    );
};

export default Topics; 