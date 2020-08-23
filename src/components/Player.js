import React from 'react'
import moment from "moment";
import "moment-duration-format";

const Player = ({ player, toggle, setClickedTime }) => {
    const curPercentage = (player.currentTime / player.duration) * 100;

    function formatDuration(duration) {
        return moment.duration(duration, "seconds").format("mm:ss", { trim: false });
    }

    function calcClickedTime(e) {
        const clickPositionInPage = e.pageX;
        const bar = document.querySelector(".bar-progress");
        const barStart = bar.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = player.duration / barWidth;
        return timePerPixel * clickPositionInBar
    }

    function handleTimeDrag(e) {
        setClickedTime(calcClickedTime(e))
    }

    return(
        <div className="mb-3">
            <div className="d-flex justify-content-between">
                <div>Song: {player.title}</div>
                <div>Artist: {player.artist}</div>
            </div>
            <div className="bar">
                <span className="bar-time">{formatDuration(player.currentTime)}</span>
                    <div className="bar-progress"
                        style={{
                            background: `linear-gradient(to right, #f8b2b2 ${curPercentage}%, white 0)`
                        }}
                        onMouseDown={player.playing ? e => handleTimeDrag(e) : null}
                    >
                    <span className="bar-progress-mover" style={{ left: `${curPercentage - 2}%` }} />
                    </div>
                <span className="bar-time">{formatDuration(player.duration)}</span>
            </div>
            <button className={player.playing ? "btn btn-outline-primary btn-sm" : "btn btn-primary btn-sm"} onClick={toggle}>{player.playing ? 'Pause' : 'Play'}</button>
        </div>
    )
}

export default Player;