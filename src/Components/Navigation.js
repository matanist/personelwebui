import React from 'react'
import ChooseLanguage from './ChooseLanguage';
export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Personel Takip</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Personel Listesi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/YeniPersonel">Yeni Personel</a>
                    </li>
                </ul>
            </div>
            <ChooseLanguage />
        </nav>
    )
}
