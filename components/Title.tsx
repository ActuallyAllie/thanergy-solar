interface Props {
    children: React.ReactNode;
}

export function Title({ children }: Props) {
    return <h1 className="text-3xl ml-4 mb-5 text-indigo-800">{children}</h1>;
}
