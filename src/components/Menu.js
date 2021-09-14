import React, { useEffect, useState } from 'react'

import audioSound from '../sound/test.mp3'

const Menu = () => {
    const [selectSound, setSelectSound] = useState(undefined)

    useEffect(() => {
        const mainMenuSelectSound = new Audio(audioSound)

        setSelectSound(mainMenuSelectSound)
    }, [])

    function selectionKeyFunction(e) {
        if(e.target.children[0].classList.contains('active')) {
            if(e.key === 'Enter') {
                console.log('Fight')
            }

            if(e.key === 'ArrowRight') {
                e.target.children[0].classList.remove('active')
                e.target.children[1].classList.add('active')

                selectSound.pause()
                selectSound.currentTime = 0
                selectSound.play()
            } else if (e.key === 'ArrowDown') {
                e.target.children[0].classList.remove('active')
                e.target.children[2].classList.add('active')

                selectSound.pause()
                selectSound.currentTime = 0
                selectSound.play()
            } else {
                return
            }
        } else if(e.target.children[1].classList.contains('active')) {
            if(e.key === 'Enter') {
                console.log('Bag')
            }

            if(e.key === 'ArrowLeft') {
                e.target.children[1].classList.remove('active')
                e.target.children[0].classList.add('active')

                selectSound.pause()
                selectSound.currentTime = 0
                selectSound.play()
            } else if (e.key === 'ArrowDown') {
                e.target.children[1].classList.remove('active')
                e.target.children[3].classList.add('active')

                selectSound.pause()
                selectSound.currentTime = 0
                selectSound.play()
            } else {
                return
            }
        } else if(e.target.children[2].classList.contains('active')) {
            if(e.key === 'Enter') {
                console.log('Pokemon')
            }

            if(e.key === 'ArrowRight') {
                e.target.children[2].classList.remove('active')
                e.target.children[3].classList.add('active')

                selectSound.pause()
                selectSound.currentTime = 0
                selectSound.play()
            } else if (e.key === 'ArrowUp') {
                e.target.children[2].classList.remove('active')
                e.target.children[0].classList.add('active')

                selectSound.pause()
                selectSound.currentTime = 0
                selectSound.play()
            } else {
                return
            }
        } else if(e.target.children[3].classList.contains('active')) {
            if(e.key === 'Enter') {
                console.log('Run')
            }
            
            if(e.key === 'ArrowLeft') {
                e.target.children[3].classList.remove('active')
                e.target.children[2].classList.add('active')

                selectSound.pause()
                selectSound.currentTime = 0
                selectSound.play()
            } else if (e.key === 'ArrowUp') {
                e.target.children[3].classList.remove('active')
                e.target.children[1].classList.add('active')

                selectSound.pause()
                selectSound.currentTime = 0
                selectSound.play()
            } else {
                return
            }
        }
    }

    return (
        <section className="menu">
            <div className="main-menu active">
                <h2 className="main-menu-text">What will BLASTOISE do?</h2>
                <div className="main-menu-selection-container" tabIndex='0' onKeyDown={e => selectionKeyFunction(e)}>
                    <h3 className="fight-selection active"><i className="fas fa-caret-right"></i> FIGHT</h3>
                    <h3 className="bag-selection"><i className="fas fa-caret-right"></i> BAG</h3>
                    <h3 className="pokemon-selection"><i className="fas fa-caret-right"></i> POKeMON</h3>
                    <h3 className="run-selection"><i className="fas fa-caret-right"></i> RUN</h3>
                </div>
            </div>
            <div className="fight-menu"></div>
            <div className="bag-menu"></div>
            <div className="pokemon-menu"></div>
        </section>
    )
}

export default Menu