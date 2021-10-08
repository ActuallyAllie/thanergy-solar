import Image from 'next/image';
import solarFlare from '../public/solar-flare.png';

export function Header() {
    return (
        <div className="w-full h-auto flex-0 border-b border-solid border-gray-200 flex flex-row items-center justify-between">
            <div className="flex-0 flex flex-row">
                <div className="flex-0 px-5">
                    <Image
                        src={solarFlare}
                        alt="Thanergy solar logo"
                        width="64"
                        height="64"
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl mt-2 text-indigo-500">Thanergy Solar</h1>
                </div>
            </div>
            <div className="flex flex-row justify-around">
                <a className="w-32">Customers</a>
                <a className="w-32">Solar Farms</a>
            </div>
        </div>
    );
}
