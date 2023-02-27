import React from 'react';

const Blogs = () => {
    return (

        <div className=' min-h-[85vh] flex flex-col items-center justify-center'>
            <div className='w-10/12 mx-auto'>
                <div tabIndex={0} className=" mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is CORS?
                    </div>
                    <div className="collapse-content">
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.

                            CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.</p>
                    </div>
                </div>

                <div tabIndex={0} className="  mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why are you using firebase?What other options do you have to implement authentication?
                    </div>
                    <div className="collapse-content">
                        <p>

                            Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.

                        </p>
                        <div>
                            Other options:
                            <ol className='list-decimal ml-4'>
                                <li >Password-based authentication</li>
                                <li>Two-factor/multifactor authentication</li>
                                <li>Biometric authentication</li>
                                <li>Single sign-on</li>
                                <li>Token-based authentication</li>
                                <li>Certificate-based authentication</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div tabIndex={0} className="  mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does the private route work?
                    </div>
                    <div className="collapse-content">
                        <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.<br />

                            The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
                    </div>
                </div>

                <div tabIndex={0} className=" mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is Node? How does Node work?
                    </div>
                    <div className="collapse-content">
                        <p>Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file. <br />

                            module is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.
                            require is a function used to import modules from other files or Node packages.
                            process is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;