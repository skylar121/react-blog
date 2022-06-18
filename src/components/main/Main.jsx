import React from 'react'
import './main.css'

import Posts from '../posts/Posts'
import About from '../about/About'


export default function Main() {
    return (
        <main>
            <div className="max-width">
                <h2 className="a11y-hidden">Post</h2>
                <Posts />
                <About />
            </div>
        </main>
    )
}
