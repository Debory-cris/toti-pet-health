import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function Container({ children }: Props) {
    return (
        <div className="max-w-7xl px-2 md:px-20 flex justify-between items-center">
            {children}
        </div>
    );
}