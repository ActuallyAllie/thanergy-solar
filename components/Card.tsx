import { Title } from './Title';

interface Props {
    title?: string;
    children: React.ReactNode;
}

export function Card({ title, children }: Props) {
    return (
        <div className="w-full px-5">
            <div className="w-full text-indigo-600 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-100 p-10">
                <Title>{title}</Title>
                {children}
            </div>
        </div>
    );
}
