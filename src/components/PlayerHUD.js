import React from 'react'

const PlayerHUD = () => {
    return (
        <section className="player-hud">
            <div className="health-container player-health">
                <div className="player-health-container">
                    <div className="name-level">
                        <h2 className="player-name">BLASTOISE</h2>
                        <h2 className="player-level">Lv75</h2>
                    </div>
                    <div className="player-health-bar">
                        <div className="player-health-bar-container">
                            <h4 className="hp">HP</h4>
                            <div className="player-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="player-sprite-container">
                <div className="player-sprite"></div>
                <div className="player-sprite-platform">
                    <div className="player-sprite-inner-platform"></div>
                </div>
            </div>
        </section>
    )
}

export default PlayerHUD