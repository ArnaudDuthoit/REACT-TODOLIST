import React from 'react';

export const Header = () => {

    const x = 1;

    return <header className="header" data-testid="header">

        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="Logo Todolist"/>
            </div>
            <div className="settings">
                <ul>
                    <li>+</li>
                    <li>Mode dark</li>
                </ul>
            </div>
        </nav>
    </header>
};