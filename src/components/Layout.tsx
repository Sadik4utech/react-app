import { BsCurrencyBitcoin, BsWindows, } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'
import { faker } from '@faker-js/faker';

const Layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <main className="flex w-full">
        <div className="px-3 pt-5 bg-gray-200 h-screen">
            <div className="mb-8">
                <BsCurrencyBitcoin size={30} />
            </div>
            <div className="mb-8">
                <BsWindows size={30} />
            </div>
            <div className="mb-8">
                <FiMessageCircle size={30} />
            </div>
        </div>
        <div className="w-full">
            <div className="px-6 py-2 w-full flex justify-between">
                <h3 className="text-2xl font-bold">Dashboard</h3>
                <div className="flex gap-x-4">
                    <div className="max-h-max my-auto">
                        <input type="text" className="border border-gray-300 rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='Employee Search' />
                    </div>
                    <div className="w-12 h-12">
                        <img className="relative z-30 inline object-cover max-w-full border-2 border-white rounded-full" src={faker.image.avatarLegacy()} alt="Profile image"/>
                    </div>
                </div>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout