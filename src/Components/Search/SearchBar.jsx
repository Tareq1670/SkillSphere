"use client";
import { Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentValue = searchParams.get("search") || "";

    const [searchValue, setSearchValue] = useState(currentValue);

    const updateURL = (value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }
        router.push(`/courses?${params.toString()}`);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        if (value === "") {
            updateURL("");
        }
    };

    return (
        <div>
            <div className="flex gap-2 items-center justify-center">
                <div className="relative w-full">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleChange}
                        onKeyDown={(e) =>
                            e.key === "Enter" && updateURL(searchValue)
                        }
                        placeholder="Search courses..."
                        className="w-full rounded-lg border py-3 pl-10 pr-4 focus:border-purple-600 outline-none"
                    />
                    <IoSearch className="absolute left-3 top-4 text-zinc-500" />
                </div>
                <Button
                    onClick={() => updateURL(searchValue)}
                    className={
                        "w-3/10  py-3 md:py-4 px-4 md:px-5 h-auto rounded-lg bg-purple-600"
                    }
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;
