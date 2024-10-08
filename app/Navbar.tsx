interface User {
    name: string;
}

interface Props {
    user?: User;
}

export default function Navbar({ user }: Props){
    
    return (
        <div className="bg-[#ffdeb9] w-full h-6 border-black border-b-[1px]">
            <a href="/">
                <img />
                <p className="text-base pixelify">Log in to remember me</p>
            </a>
        </div>
    )
}