"use client"

import { Song } from "@/types"

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    if (songs.length === 0 || undefined) {
        return (
            <div className="
                flex
                flex-col
                gap-y-2
                w-full
                px-6
                text-neutral-400
            ">
                No results
            </div>
        )
    }
    return (
        <div>SearchContent</div>
    )
}

export default SearchContent;
