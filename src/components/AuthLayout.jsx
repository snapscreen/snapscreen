import Image from 'next/image'

import backgroundImage from '@/assets/background-auth.jpg'

export function AuthLayout({ children, asideContent }) {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row min-h-full justify-start md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-start md:flex-none md:px-28">
          <div className="sticky top-16 mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 py-16 bg-blue-600">
          <div className="relative z-20 text-white px-4 sm:px-16">
            { asideContent }
          </div>
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            src={backgroundImage}
            alt=""
            unoptimized
          />
        </div>
      </div>
    </>
  )
}
