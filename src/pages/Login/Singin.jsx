
import Logo from "../../assets/images/singupBanner.png"
import { Link } from "react-router-dom";

const Singin = () => {
    const handlesingin = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password1 = form.password1.value;
        
        const newUser = {
            username,
            email,
            password: password1
        }
        console.log(newUser)
    }
    return (
        <section className="gradient-form h-full w-full  bg-neutral-200 dark:bg-neutral-700">
            <div className=" h-full w-full">
                <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className=" lg:flex flex-row-reverse lg:flex-wrap">
                                {/* right column container */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:px-12 md:pb-5">
                                        {/* Logo */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48 "
                                                src={Logo}
                                                alt="logo"
                                            />
                                        </div>

                                        <form onSubmit={handlesingin} className="max-w-md mx-auto">
                                            <p className="mb-4 font-sans text-gray-400">Please Login</p>

                                     
                                          
                                           
                                            {/* Email input */}
                                            <div className="relative mb-4">

                                                <input
                                                    type="email"
                                                   className="min-w-0 w-full flex-auto border-0 bg-white bg-opacity-5 focus:outline-none px-3.5 py-2 text-gray-700 shadow-sm focus:ring-1 focus:ring-red-300 text-sm leading-6 rounded"
                                                    id="email"
                                                    placeholder="Email address"
                                                    name="email"
                                                />
                                            </div>

                                            {/* Password inputs */}
                                            <div className="relative mb-4">

                                                <input
                                                    type="password"
                                                   className="min-w-0 w-full flex-auto border-0 bg-white focus:outline-none bg-opacity-5 px-3.5 py-2 text-gray-700 shadow-sm focus:ring-1 focus:ring-red-300 text-sm leading-6 rounded"
                                                    id="password1"
                                                    placeholder="Password"
                                                    name="password1"
                                                />
                                            </div>

                                           

                                            {/* Submit button */}
                                            <div className="mb-8 text-center">
                                                <button
                                                    className="w-full rounded px-4 py-2 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                    type="submit"
                                                >
                                                    Sign in
                                                </button>
                                            </div>

                                            {/* Terms and conditions link */}
                                            <div className="mb-4 text-center">
                                                <a href="#!" className="text-gray-500 hover:text-gray-700">
                                                    Terms and conditions
                                                </a>
                                            </div>

                                            {/* Login button */}
                                            <div className="flex items-center justify-center">
                                                <p className="mr-2">Don&apos;t an account?</p>
                                                <Link to='/singup'
                                                    type="button"
                                                    className="border-2 border-red-500 px-4 py-2 text-xs font-medium uppercase text-red-500 hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus:border-red-600 focus:bg-red-50 focus:text-red-600 focus:shadow-sm focus:ring-2 focus:ring-red-500"
                                                >
                                                    Sing up
                                                </Link>
                                            </div>
                                        </form>


                                    </div>
                                </div>

                                {/* left column container with background and description */}
                                <div
                                    className="lg:flex items-center hidden  rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                                    style={{ background: 'linear-gradient(to right, #FF6769, #E84A9D, #AC37F1, #287FFF)' }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-bold">
                                            i Messenger
                                        </h4>
                                        <p className="text-sm">
                                            i Messenger is used to send messages and exchange photos, videos, stickers, audio, and files, and also react to other users messages and interact with bots. The service also supports voice and video calling. The standalone apps support using multiple accounts, conversations with end-to-end encryption, and playing games.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Singin;