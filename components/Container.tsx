import Head from 'next/head';
import Image from 'next/image';
import solarFlare from '../public/solar-flare.png';
import { Header } from '../components/Header';

export function Container(props) {
    return (
        <div className="xl:container mx-auto flex flex-col justfiy-center items-center">
            <Header className="w-full flex-0 h-16 border-b border-solid" />
            <main className="w-full py-5 flex flex-col flex-1 justify-center items-center">
                {props.children}
            </main>

            <footer className="w-full h-16 border-t border-solid border-gray-200 flex justify-center items-center">
                <span className="text-pink-800">Powered by Alecto</span>
            </footer>
        </div>
    );
}
