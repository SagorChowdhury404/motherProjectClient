import React from 'react';

const News = () => {
    return (
        <div>
            <section className="px-5 py-10 bg-white dark:text-gray-800">
                <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                    <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                        <div className="flex flex-col space-y-8 md:space-y-12">
                            {[...Array(3)].map((_, i) => (
                                <div className="flex flex-col space-y-2" key={i}>
                                    <h3 className="flex items-center space-x-2 dark:text-gray-600">
                                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-600"></span>
                                        <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                    </h3>
                                    <a href="#" className="font-serif hover:underline">Sample exclusive news title {i + 1}</a>
                                    <p className="text-xs dark:text-gray-600">
                                        {47 * (i + 1)} minutes ago by
                                        <a href="#" className="hover:underline dark:text-violet-600 ml-1">Leroy Jenkins</a>
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-600">
                                <div className="w-1/2 h-full dark:bg-violet-600"></div>
                            </div>
                            <a href="#" className="flex items-center justify-between w-full">
                                <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
                                <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-600">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        className="relative flex col-span-12 dark:bg-gray-500 bg-center bg-no-repeat bg-cover xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
                        style={{ backgroundImage: "url('https://source.unsplash.com/random/239x319')" }}
                    >
                        <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:text-gray-800 dark:border-violet-600">
                            paris, france
                        </span>
                        <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group flex-grow bg-gradient-to-b dark:from-gray-50 dark:to-gray-50">
                            <span className="flex items-center mb-4 space-x-2 dark:text-violet-600">
                                <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-600">
                                    <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-600"></span>
                                </span>
                                <span className="text-sm font-bold">Live</span>
                            </span>
                            <h1 className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-800">
                                Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?
                            </h1>
                        </a>
                    </div>

                    <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                        <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-600">
                            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-600">
                                Latest
                            </button>
                            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:text-gray-600">
                                Popular
                            </button>
                        </div>
                        <div className="flex flex-col divide-y dark:divide-gray-300">
                            {[...Array(4)].map((_, i) => (
                                <div className="flex px-1 py-4" key={i}>
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src={`https://source.unsplash.com/random/24${i + 4}x32${i + 4}`} />
                                    <div className="flex flex-col flex-grow">
                                        <a href="#" className="font-serif hover:underline">Sample article title {i + 1}</a>
                                        <p className="mt-auto text-xs dark:text-gray-600">
                                            {5 + i * 9} minutes ago
                                            <a href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">Category</a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default News;