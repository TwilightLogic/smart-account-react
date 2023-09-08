import { CopyIcon } from "@chakra-ui/icons"
import { useState } from "react"
import {
  Avatar,
  IconButton,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Stack,
  Badge,
  Box,
  AbsoluteCenter,
  WrapItem,
  ModalFooter,
} from "@chakra-ui/react"
import { Outlet, NavLink } from "react-router-dom"

const HomePage = () => {
  const [account, setAccount] = useState(
    "0x6A1B95E7402D2562b3EDB6124b059522e5178578"
  )

  const formatString = (inputString) => {
    const frontPart = inputString.substring(0, 6)
    const backPart = inputString.substring(inputString.length - 3)

    return `${frontPart}...${backPart}`
  }

  return (
    <>
      <div className="flex items-center justify-between h-screen  relative isolate">
        {/* backgroundColor-1 */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pl-12 w-2/6 h-full">
          <Avatar
            size="lg"
            name="Account1"
            src="https://bit.ly/tioluwani-kolawole"
            className="select-none hover:scale-105 transition"
          />
          <h2 className="text-gray-900 font-bold text-xl">Account1</h2>
          <div className="flex items-center justify-center gap-2">
            {account ? (
              <p className="text-gray-500 text-md">{formatString(account)}</p>
            ) : (
              ""
            )}
            <IconButton
              colorScheme="gray"
              aria-label="Search"
              icon={<CopyIcon />}
            />
          </div>
          <button className="mt-2 font-bold py-4 px-8 rounded-full hover:bg-indigo-200  w-full transition text-base border-solid border-2 border-indigo-600 bg-indigo-50 text-indigo-600 cursor-pointer hover:scale-105">
            Activate Your Wallet 🪐
          </button>
          <Divider w="100%" m={8} />
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <NavLink
              to="/home/send"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold bg-indigo-200 text-indigo-600"
                    : "text-gray-600"
                } hover:text-indigo-600 hover:scale-105 py-4 px-8 w-full text-center transition text-base font-semibold`
              }
            >
              Send Tokens 🪙
            </NavLink>
            <NavLink
              to="/home/receive"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold bg-indigo-200 text-indigo-600"
                    : "text-gray-600"
                } hover:text-indigo-600 hover:scale-105 py-4 px-8 w-full text-center transition text-base font-semibold `
              }
            >
              Receive Tokens ✨
            </NavLink>
          </div>
        </div>

        <div className="w-full h-full p-12">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl h-full">
            <Outlet />
          </div>
        </div>
        {/* backgroundColor-2 */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage
