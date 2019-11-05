import React from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa' ;

export const Sidebar = () => (

    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
            <li>
                <span><FaInbox/></span>
                <span>Inbox</span>
            </li>
            <li>
                <span><FaRegCalendar/></span>
                <span>Aujourd'hui</span>
            </li>
            <li>
                <span><FaRegCalendarAlt/></span>
                <span>7 Prochains jours</span>
            </li>
        </ul>

        <div className="sidebar__middle">
            <span><FaChevronDown/></span>
            <h2>Projets</h2>
        </div>

        <ul className="sidebar__projects">Les projets seronts là!</ul>

        "Ajouter Projet" component ici!

    </div>
);

