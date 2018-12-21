import React from 'react';
import IconContentBlock from '../../molecules/IconContentBlock/IconContentBlock';
import BrandedHeader from '../../atoms/BrandedHeader/BrandedHeader';
import {customerSuccessStories, customerRecognitionStories} from './data';

function Recognition() {
	return (
		<aside className="recognition">
			<div className="customer-success">
				<h2 className="d1">
					Customer Success
				</h2>

				<div className="awards">
					{customerSuccessStories.map(story => {
						return (
							<IconContentBlock
								description={story.description}
								elevated={true}
								imageUrl={story.imageUrl}
								key={story.title}
								title={story.title}
							/>
						);
					})}
				</div>
			</div>

			<div className="customer-recognition">
				<BrandedHeader center text="Our Recognition" />

				<div className="awards">
					{customerRecognitionStories.map(story => {
						return (
							<IconContentBlock
								description={story.description}
								imageUrl={story.imageUrl}
								key={story.description}
								title={story.title}
							/>
						);
					})}
				</div>
			</div>
		</aside>
	);
}

export default Recognition;
