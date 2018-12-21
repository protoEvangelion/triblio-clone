import React from 'react';
import Button from '../../atoms/Button/Button';
import Waypoint from 'react-waypoint';
import DividerSvg from './DividerSvg';

const CTA = ({toggleVisibility, visible, go}) => {
	return (
		<Waypoint
			bottomOffset="20%"
			onEnter={toggleVisibility}
			onLeave={toggleVisibility}
		>
			<aside
				className={`cta-section text-left ${
					visible ? 'add-background' : ''
				} ${visible === undefined ? 'bg' : ''}`}
			>
				<h2 className="d1">Talk to an Expert</h2>

				<p className="large semibold">
					Dive into award winning ABM case studies.
				</p>

				<div className="buttonSvg">
					<Button
						children="Talk to ABM Expert"
						color={visible ? 'light' : ''}
						link="https://triblio.com/request-demo"
					/>

					<DividerSvg name="dividerHorizontal" />
				</div>
			</aside>
		</Waypoint>
	);
};

export default CTA;
