"use client"

import { useRouter } from "next/navigation";

type Item = {
    name: string;
    icon: React.ReactNode;
}

export default function Navigate(
    { item }: { item: Item }
) {
    const router = useRouter();

    return (
        <button
            className="flex gap-4"
            onClick={() => router.push(`/${item.name.toLowerCase()}`)}
        >
            {item.icon}
            {item.name}
        </button>
    );
}
