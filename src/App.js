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
                        url: 'https://cdn3.justnaija.com/uploads/music/2020/08/Fireboy-DML-ELI-(JustNaija.com).mp3?dl=true',
                    },{
                        title: 'Lo Lo',
                        artist: 'Omah Lay',
                        url: 'https://9jaflaver.com/wp-content/uploads/2020/07/Omah_Lay_Lo_Lo_9jaflaver.com_.mp3',
                    },
                    {
                        title: 'As E Dey Go',
                        artist: 'Naira Marley',
                        url: 'https://naijaloaded.store/wp-content/uploads/2020/06/Naira-Marley-As-E-Dey-Go.mp3',
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
