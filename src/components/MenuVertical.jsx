import React from 'react'
import { Link } from 'react-router-dom';
import { Handshake, Globe, Atom, ChartPie, SoccerBall } from 'phosphor-react'

import './MenuVertical.css'

function MenuVertical() {
	return (
		<div className='menu-vertical-container'>
			<Link to='/' className="item">
				<Globe color="var(--logo-font-color)" weight="light" size={32} />
				<span className="text-item">MUNDO</span>
			</Link>
		</div>
	)
}

export default MenuVertical