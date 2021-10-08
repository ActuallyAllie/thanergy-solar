interface Props {
    children: React.ReactNode;
}

export function Label({ children }: Props) {
    return <label className="font-bold mr-3">{children}</label>;
}
