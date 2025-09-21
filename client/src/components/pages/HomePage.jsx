import React, { lazy, Suspense } from 'react'

const WeatherWidget = lazy(() => import('../ui/WeatherWidget'))

const HomePage = () => {
    return (
        <div
        className='w-full h-auto 2xl:py-[80px] md:py-[40px] py-[16px] bg-gray-950 text-[#f4f4f4] flex justify-center items-center font-[BitcountInk]'>
            <Suspense fallback={<p>loading...</p>}>
                <WeatherWidget />
            </Suspense>
        </div>
    )
}

export default HomePage
