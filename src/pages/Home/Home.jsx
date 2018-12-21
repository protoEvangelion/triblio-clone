import React from 'react';
import HomeHero from '../../components/organisms/HomeHero/HomeHero';
import CoreFeatures from '../../components/organisms/CoreFeatures/CoreFeatures';
import Team from '../../components/organisms/Team/Team';
import Customers from '../../components/organisms/Customers/Customers';
import Recognition from '../../components/organisms/Recognition/Recognition';

function Home() {
	return (
		<main className="triblio-custom">
			<HomeHero />

			<CoreFeatures />

			<Team />

			<Customers />

			<Recognition />
		</main>
	);
}

export default Home;
