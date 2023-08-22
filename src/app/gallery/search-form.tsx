"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchForm(
    { initialSearch }: { initialSearch: string }
) {
    const [tagName, setTagName] = useState(initialSearch ?? "");
    const router = useRouter();

    useEffect(() => {
        setTagName(initialSearch ?? "");
    }, [initialSearch])

    return (
        <form className="join" onSubmit={(e) => {
            e.preventDefault();
            router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
            router.refresh();
        }}>
            <input
                name="search"
                className="input input-bordered join-item"
                placeholder="Search By Tag"
                type="text"
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
            />
            <button className="btn btn-primary join-item">Search</button>
        </form>
    );
}
