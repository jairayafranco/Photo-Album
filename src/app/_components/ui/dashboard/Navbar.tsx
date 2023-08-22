import Profile from "./Profile";

export default function Navbar() {
    return (
        <div className="navbar bg-base-300 border-b-white border-b-2">
            <label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-2xl font-bold text-white">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3h4M8 17h4m-9-5V8m14 4V8M1 1h4v4H1V1Zm14 0h4v4h-4V1ZM1 15h4v4H1v-4Zm14 0h4v4h-4v-4Z" />
                    </svg>
                    Photo Album
                </a>
            </div>
            <Profile />
        </div>
    );
}
