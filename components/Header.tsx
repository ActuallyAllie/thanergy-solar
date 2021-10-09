import Image from 'next/image';
import { Link } from './Link';

export function Header() {
    return (
        <div className="w-full h-auto flex-0 border-b border-solid border-gray-200 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-row">
                <div className="flex-0 px-5">
                    <Image
                        src="/solar-flare.png"
                        alt="Thanergy solar logo"
                        width="64"
                        height="64"
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl mt-3 text-4xl mt-2 text-indigo-500">
                        Thanergy Solar
                    </h1>
                </div>
            </div>
            <div className="h-16 mb-3 sm:mb-0 sm:h-auto text-xl sm:text-base flex flex-col sm:flex-row justify-between text-center">
                <Link href="/">Customers</Link>
                <Link href="/solar-farms">Solar Farms</Link>
            </div>
        </div>
    );
}
