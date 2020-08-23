import React from 'react'
import MultiPlayer from './components/MultiPlayer'
import './App.css'

function App() {
    return (
        <div className="App">
            <MultiPlayer
                urls={[
                    {
                        title: 'Eli',
                        artist: 'Fireboy DML',
                        url: './audio/Fireboy-DML-ELI.mp3',
                    },{
                        title: 'Lo Lo',
                        artist: 'Omah Lay',
                        url: './audio/Omah_Lay_Lo_Lo.mp3',
                    },
                    {
                        title: 'As E Dey Go',
                        artist: 'Naira Marley',
                        url: './audio/Naira-Marley-As-E-Dey-Go.mp3',
                    }
                ]}
            />
            <div className="text-center" style={{marginTop:"120px", fontSize:"12px"}}>
                GitHub: <a href="https://github.com/joshuaoweipadei/React-Hooks-Audio-MultiPlayer" target="blank">https://github.com/joshuaoweipadei/React-Hooks-Audio-MultiPlayer</a>
                <div>By Joshua Oweipadei Bayefa</div>
            </div>
        </div>
    )
}

export default App;
