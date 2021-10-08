import NextLink, { LinkProps } from 'next/link';

interface Props extends LinkProps {
    children: React.ReactNode;
}

export function Link(props: Props) {
    return (
        <NextLink {...props}>
            <a className="w-32 hover:text-blue-600 transition-all transform hover:scale-110 active:scale-100">
                {props.children}
            </a>
        </NextLink>
    );
}
