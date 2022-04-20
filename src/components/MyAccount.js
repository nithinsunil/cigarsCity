import React from 'react'

function MyAccount() {
    return (
        <div>

            <div class="flex">
                <div class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r" className="sidebar">
                    <h2 class="text-3xl font-bold text-center text-800">My Account</h2>


                    <div class="flex flex-col justify-evenly mt-8" className="sidebar-1">
                        <aside>
                            <ul>
                                <li>
                                    <span class="mx-4 font-medium"><a href=''>My Account</a></span>
                                </li>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>My Orders</a></span>
                                </li>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>My Wishlist</a></span>
                                </li> <br></br>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>Account Information</a></span>
                                </li>

                                <li class="mt-2">
                                    <span class="mx-4 font-bold"><a href=''>Address Book</a></span>
                                </li> <br></br>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>Company Profile</a></span>
                                </li>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>Company Structure</a></span>
                                </li>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>Company Users</a></span>
                                </li>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>Roles and Permissions</a></span>
                                </li> <br></br>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>Product Questions</a></span>
                                </li>

                                <li class="mt-2">
                                    <span class="mx-4 font-medium"><a href=''>My Subscriptions</a></span>
                                </li>
                            </ul>

                        </aside>

                    </div>
                </div>


                <div class="w-full h-full p-4 m-8 overflow-y-auto">
                    <div class="flex items-center  p-40 ">

                        <form class="w-full max-w-lg" className="form-1">
                            <h1 class="text-3xl font-bold">Add Store</h1> <br></br>
                            <h3 class="text-2xl font-semibold mt-6">Business Information</h3> <br></br> <hr />

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-12">
                                    <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-first-name">
                                        Nickname *
                                    </label>
                                    <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
                                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div class="w-full md:w-1/2 px-3 mt-12">
                                    <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-last-name">
                                        Legal Name *
                                    </label>
                                    <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mt-12">
                                    <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-last-name">
                                        Federal Tax ID
                                    </label>
                                    <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mt-12">
                                    <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-last-name">
                                        Business Email
                                    </label>
                                    <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                                </div>

                            </div>

                            <div className="forms-div">
                                <div>
                                    <h3 class="text-xl font-medium mt-24" className="check">Shipping Address&nbsp;&nbsp;&nbsp;</h3>
                                    <input type="checkbox" id="addr" className="check" class="mt-4" /> <label className="check" class="mt-24" for="addr">&nbsp;&nbsp;Set as default address</label>



                                    <div class="w-full md:w-1/2 px-3 mt-12">
                                        <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-last-name">
                                            Address Line 1 *
                                        </label>
                                        <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                                    </div>

                                    <div class="w-full md:w-1/2 px-3 mt-12">
                                        <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-last-name">
                                            Address Line 2 *
                                        </label>
                                        <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                                    </div>

                                    <div class="flex flex-wrap -mx-3 mb-2 mt-12">
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-city">
                                                Zip code *
                                            </label>
                                            <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
                                        </div>

                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-zip">
                                                City *
                                            </label>
                                            <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="" />
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap">
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-state">
                                                State
                                            </label>
                                            <div class="relative">
                                                <select class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                    <option>GA</option>
                                                    <option>Missouri</option>
                                                    <option>Texas</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="w-full md:w-1/2 px-3">
                                            <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-last-name">
                                                Country *
                                            </label>
                                            <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                                        </div>

                                    </div>

                                    <div class="w-full md:w-1/2 px-3 mt-12">
                                        <label class="block  tracking-wide text-gray-700 text-md font-normal mb-2" for="grid-last-name">
                                            Phone Number *
                                        </label>
                                        <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                                    </div>
                                </div>

                                <div> <h3 class="text-xl font-medium mt-24">License Details</h3> <br></br> <hr /></div>
                                <div class="file-input">
                                    <div class="mb-3 w-96">
                                        <label for="formFile" class="form-label inline-block mb-2 text-gray-700 mt-4">ST-5 SST Exemption Certificate</label>
                                        <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount