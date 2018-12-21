import React from 'react';
import Button from '../../atoms/Button/Button';
import Svg from '../../atoms/Svg/Svg';

function Team() {
	return (
		<section className="team">
			<div className="content-wrapper">
				<div className="text-content">
					<div className="text-boundary" />

					<h2 className="d1">Our Team</h2>

					<h3 className="f4">
						<span>Experts to guide you at every stage of </span>
						<span>your ABM program.</span>
					</h3>

					<p>
						From onboarding to customer success to professional
						services to agency partners, our experts' advice will
						help your ABM programs succeed. Read tips from the real
						world in this ebook.
					</p>

					<Button link="https://triblio.com/abm-ebook/" color="dark">
						Get Your ABM Guide
					</Button>
				</div>

				<figure>
					<img
						src="https://triblio.com/wp-content/uploads/2018/11/image-1.png"
						alt="Erin Director, ABM Success Team"
					/>
				</figure>

				<figcaption>
					<span className="team-member">Erin</span>
					<span className="job-title">
						<span>Director, </span>
						ABM Success Team
					</span>
					<span className="job-duration">Since 2015</span>
				</figcaption>
			</div>

			<Svg className="svg-curve" name="teamCurve" />
		</section>
	);
}

export default Team;
