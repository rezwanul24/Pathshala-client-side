import React from 'react';
import bg from '../../assets/icon/ban-bg.png';
const FAQ = () => {
    return (
        <div className='min-h-[85vh]'>
            <div className='' style={{ backgroundImage: `url(${bg})` }}>
                <h1 className='p-12 text-center text-4xl'>Most frequently asked questions</h1>
            </div>
            <div className='w-11/12 mx-auto'>

                <p  className='text-xl my-5'>Here are the most frequently asked questions you may check before getting started</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Is there a 14-days trial?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can find there.</p>
                        </div>
                    </div>

                    <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        How much time I will need to learn this app?

                        </div>
                        <div className="collapse-content">
                            <p>You need approximate 6-8 hour per day.</p>
                        </div>
                    </div>

                    <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Is there a month-to-month payment option?

                        </div>
                        <div className="collapse-content">
                            <p>No, It is one time payment system with life time service.</p>
                        </div>
                    </div>

                    <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        What’s the benefits of the Premium Membership?

                        </div>
                        <div className="collapse-content">
                            <p>You can access the course and support for life time.</p>
                        </div>
                    </div>

                    <div tabIndex={4} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Are there any free tutorials available?

                        </div>
                        <div className="collapse-content">
                            <p>First three lectures is free for everyone</p>
                        </div>
                    </div>

                    <div tabIndex={5} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-10">
                        <div className="collapse-title text-xl font-medium">
                        How can I cancel my subscription plan?

                        </div>
                        <div className="collapse-content">
                            <p>There is no money back system</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;