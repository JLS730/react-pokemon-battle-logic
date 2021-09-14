import React from 'react'

const EnemyHUD = () => {
    return (
        <section className="enemy-hud">
            <div className="health-container enemy-health">
                <div className="enemy-health-container">
                    <div className="name-level">
                        <h2 className="enemy-name">CHARIZARD</h2>
                        <h2 className="enemy-level">Lv75</h2>
                    </div>
                    <div className="enemy-health-bar">
                        <div className="enemy-health-bar-container">
                            <h4 className="hp">HP</h4>
                            <div className="enemy-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="enemy-player-sprite-container">
                <div className="enemy-sprite"></div>
                <div className="enemy-sprite-platform">
                    <div className="enemy-sprite-inner-platform"></div>
                </div>
            </div>
        </section>
    )
}

export default EnemyHUD