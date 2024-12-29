import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/dashboard");
  }
  return (
    <section className="relative bg-gray-50">
      <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Microfrontend Blog{' '}
              <span className="inline">
                <img
                  className="inline w-auto h-8 sm:h-10 lg:h-12"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg"
                  alt="shape-1"
                />
              </span>{' '}
              made by Ravi Kishan {' '}
              <span className="inline">
                <img
                  className="inline w-auto h-8 sm:h-10 lg:h-11"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg"
                  alt="shape-2"
                />
              </span>
            </h1>
            <p className="mt-6 text-base font-normal leading-7 text-gray-900">
              I build this blog to demonstrate how the microfrontend work. This blog is built using React, Tailwind CSS, and Clerk. This use the module federation to load the different microfrontend.
            </p>
            <svg
              className="w-auto h-4 mt-8 text-gray-300"
              viewBox="0 0 172 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[...Array(24)].map((_, index) => (
                <line
                  key={index}
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${index * 7 + 11} 1)`}
                />
              ))}
            </svg>

          </div>
        </div>
      </div>
      <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
        <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img src="../diagram.gif" alt="diagram" />

        </div>
      </div>
    </section>
  )
}

export default Home