import React from 'react'
import useMultiAudio from './useMultiAudio'
import Player from './Player'

const MultiPlayer = ({ urls }) => {
    const [players, toggle, setClickedTime] = useMultiAudio(urls)

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6">
                    <h3 className="text-center mb-4">React + Hooks Audio MultiPlayer</h3>
                    {players.map((player, i) => (
                        <Player key={i} player={player} index={i} toggle={toggle(i)} setClickedTime={(time) => setClickedTime(time)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MultiPlayer;