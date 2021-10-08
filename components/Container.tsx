import { Header } from '../components/Header';

interface Props {
    children: React.ReactNode;
}

export function Container(props: Props) {
    return (
        <div className="xl:container mx-auto flex flex-col justify-center items-center">
            <Header />
            <main className="w-full py-5 flex flex-col flex-1 justify-center items-center">
                {props.children}
            </main>

            <footer className="w-full h-16 border-t border-solid border-gray-200 flex justify-center items-center">
                <span className="text-pink-800">Powered by Alecto</span>
            </footer>
        </div>
    );
}
