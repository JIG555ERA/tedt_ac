import React, { lazy, Suspense } from 'react'

const WeatherWidget = lazy(() => import('../ui/WeatherWidget'))

const HomePage = () => {
    return (
        <div
        className='w-full h-screen bg-gray-950 text-[#f4f4f4] flex justify-center items-center font-[BitcountInk]'>
            <Suspense fallback={<p>loading...</p>}>
                <WeatherWidget />
            </Suspense>
        </div>
    )
}

export default HomePage
