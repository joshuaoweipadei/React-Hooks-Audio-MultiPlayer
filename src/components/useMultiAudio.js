import React, { useState, useEffect } from 'react'

const useMultiAudio = (urls) => {
    const [clickedTime, setClickedTime] = useState();

    const [sources] = useState(
        urls.map(url => {
            return {
                url: url.url,
                audio: new Audio(url.url),
            }
        }),
    )

    const [players, setPlayers] = useState(
        urls.map(url => {
            return {
                url: url.url,
                title: url.title,
                artist: url.artist,
                playing: false,
                duration: 0,
                currentTime: undefined,
            }
        }),
    )

    const toggle = targetIndex => () => {
        const newPlayers = [...players]
        const currentIndex = players.findIndex(p => p.playing === true)
        if(currentIndex !== -1 && currentIndex !== targetIndex) {
            newPlayers[currentIndex].playing = false
            newPlayers[targetIndex].playing = true
        }else if(currentIndex !== -1){
            newPlayers[targetIndex].playing = false
        }else{
            newPlayers[targetIndex].playing = true
        }
        setPlayers(newPlayers)
    }

    useEffect(() => {
        sources.forEach((source, i) => {
            players[i].playing ? source.audio.play() : source.audio.pause();
            if(clickedTime && players[i].playing){
                source.audio.currentTime = clickedTime;
                setClickedTime(null)
            }
        })
    }, [sources, players, clickedTime])

    useEffect(() => {
        sources.forEach((source, i) => {
            source.audio.addEventListener('ended', () => {
                const newPlayers = [...players]
                newPlayers[i].playing = false
                setPlayers(newPlayers)
            });
            source.audio.addEventListener("loadeddata", () => {
                const newPlayers = [...players]
                newPlayers[i].duration = source.audio.duration
                setPlayers(newPlayers);
            });
            source.audio.addEventListener("timeupdate", () => {
                const newPlayers = [...players]
                newPlayers[i].currentTime = source.audio.currentTime
                setPlayers(newPlayers);
            });
        })
        return () => {
            sources.forEach((source, i) => {
                source.audio.removeEventListener('ended', () => {
                    const newPlayers = [...players]
                    newPlayers[i].playing = false
                    setPlayers(newPlayers)
                });
                source.audio.removeEventListener("loadeddata", () => {
                    const newPlayers = [...players]
                    newPlayers[i].duration = source.audio.duration
                    setPlayers(newPlayers);
                });
                source.audio.removeEventListener("timeupdate", () => {
                    const newPlayers = [...players]
                    newPlayers[i].currentTime = source.audio.currentTime
                    setPlayers(newPlayers);
                });
            })
        }
    }, [])

    return [players, toggle, setClickedTime]
}

export default useMultiAudio;