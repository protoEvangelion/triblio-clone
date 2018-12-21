import React from 'react';
import ReactTooltip from 'react-tooltip';

function ArchitectureBlock(props) {
	const directionBorder = props.direction ? props.direction : 'Top';
	const borderColor = props.borderColor ? props.borderColor : '#E8E8E7';

	const inlineArchitectureBlock = props.inline
		? 'inline-architecture-block'
		: '';

	const outside = props.outside
		? 'outside-architecture-block ' + props.outside
		: '';

	const extraClass = props.className ? props.className : '';

	const style = {
		[`border${directionBorder}Width`]: `8px`,
		[`border${directionBorder}Style`]: `solid`,
		borderColor: `${borderColor}`,
		position: props.outside ? 'absolute' : 'relative',
		padding: props.name === 'five' ? '3rem' : '1.5rem',
	};

	const toolTipProps = {};

	if (props.toolTipText) {
		toolTipProps['data-for'] = props.name;
		toolTipProps['data-tip'] = props.toolTipText;
	}

	return (
		<div
			className={`architecture-block architecture-block-${
				props.i
			} elevation-3 f6 ${extraClass} ${outside} ${inlineArchitectureBlock}`}
			style={style}
			{...toolTipProps}
		>
			{props.children}

			{props.toolTipText && (
				<ReactTooltip
					className="architecture-tool-tip elevation-3"
					effect="solid"
					id={props.name}
					place="bottom"
					type="light"
				/>
			)}
		</div>
	);
}

export default ArchitectureBlock;
