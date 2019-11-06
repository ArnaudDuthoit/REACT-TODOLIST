import React from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa' ;

export const Sidebar = () => (

    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
            <li data-testid="inbox" className="inbox">
                <span><FaInbox/></span>
                <span>Inbox</span>
            </li>
            <li data-testid="today" className="today">
                <span><FaRegCalendar/></span>
                <span>Aujourd'hui</span>
            </li>
            <li data-testid="next_7" className="next_7">
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

