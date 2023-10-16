"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
    // Get the player state
    const player = usePlayer();
    // Get the song from the activeId
    const { song } = useGetSongById(player.activeId);

    // Get the songUrl from the song
    const songUrl = useLoadSongUrl(song!);

    // If the song or songUrl or activeId is not defined, return null
    if (!song || !songUrl || !player.activeId) {
        return null;
    }

    // Return the PlayerContent component with the songUrl and song as props
    return (
        <div className="
            fixed
            bottom-0
            bg-black
            w-full
            py-2
            h-[80px]
            px-4
        ">

            {/* destroy component with `key` to rebuild url for PlayerContent component to fetch */}
            <PlayerContent
                key={songUrl}
                song={song}
                songUrl={songUrl}
            />
        </div>
    );
}

// Export the Player component
export default Player;