import React from 'react'

function SearchSection() {
    return (
        <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] ">
                    <div>
            <div class="relative max-w-lg mx-auto py-10">
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                    <svg class="shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
                <input class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" type="text" role="combobox" aria-expanded="false" placeholder="Search your keyword" value="" data-hs-combo-box-input="" />
            </div>
        </div>
        </div>

    )
}

export default SearchSection
