import Link from "next/link"
import {FaYoutube, FaTwitter, FaGithub} from 'react-icons/fa'


export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 mb-1 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/" className="text-white/90 no-underline hover:text-white">
            Max Axanii
        </Link>
        </h1>
        <div className="flex flex-row justify-center">
        <Link className="text-white/90 mr-3 hover:text-white" href="https://www.youtube.com/" target="_blank"> <FaYoutube/></Link>
        <Link className="text-white/90 mr-3 hover:text-white" href="https://twitter.com/" target="_blank"> <FaTwitter/></Link>
         <Link className="text-white/90 hover:text-white" href="https://github.com/" target="_blank"> <FaGithub/></Link>
         </div>
        </div>
    </nav>
  )
  }
