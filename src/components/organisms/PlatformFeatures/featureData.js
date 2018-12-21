import {accountAnalyticsIllustration , audienceManagementIllustration, purchaseIntentIllustration} from './illustrations';

var features = [
	{
		name: 'Orchestration',
		mediaUrl:
			'https://triblio.com/wp-content/uploads/2018/11/triblio-orchestration-compressed.mp4',
		descriptionHTML: {
			__html: `Create multichannel campaigns that are triggered based on a combination of:
				<ul>
					<li>Account activities in marketing automation or CRM</li>
					<li>Purchase intent or campaign response</li>
					<li>Account priority, persona, or title</li>
				</ul>
			`.replace(/\t/g, ''),
		},
		icon: 'orchestrationIcon',
	},
	{
		name: 'Audience Management',
		mediaUrl:
			'https://triblio.com/wp-content/uploads/2018/11/audience-management.svg',
		illustration: audienceManagementIllustration,
		descriptionHTML: {
			__html: `Create audiences to orchestrate campaigns.
				<ul>
					<li>Map leads to accounts</li>
					<li>Recognize accounts with Triblio's AI powered account ID engine</li>
					<li>Use data from 1st and 3rd party data sources</li>
				</ul>
			`.replace(/\t/g, ''),
		},
		icon: 'audienceManagementIcon',
	},
	{
		name: 'Purchase Intent',
		mediaUrl:
			'https://triblio.com/wp-content/uploads/2018/11/purchase-intent.svg',
		illustration: purchaseIntentIllustration,
		descriptionHTML: {
			__html: `Identify purchase intent with account scoring algorithms that use:
				<ul>
					<li>Website behavior of known and unknown visitors</li>
					<li>Surges in trending topics on 3rd party sites</li>
					<li>Marketing campaigns and sales activities from CRM</li>
				</ul>
			`.replace(/\t/g, ''),
		},
		icon: 'purchaseIntentIcon',
	},
	{
		name: 'Account Based Advertising',
		linkUrl: 'https://triblio.com/account-based-ads/',
		mediaUrl:
			'https://triblio.com/wp-content/uploads/2018/11/triblio-account-based-advertising-compressed.mp4',
		descriptionHTML: {
			__html: `Reach known and unknown buyers by targeting specific contacts, personas, or accounts to build awareness at any funnel stage.
				<ul>
					<li>No minimums required for media spend, accounts, or flight time</li>
					<li>Serve impressions on all major display networks including Google and LinkedIn</li>
					<li>Integrate with AdWords retargeting and paid search</li>
				</ul>
			`.replace(/\t/g, ''),
		},
		icon: 'accountBasedAdvertisingIcon',
	},
	{
		name: 'Web Personalization',
		linkUrl: 'https://triblio.com/account-based-personalization/',
		mediaUrl:
			'https://triblio.com/wp-content/uploads/2018/11/web-personalization.gif',
		illustration: 'webPersonalizationIllustration',
		descriptionHTML: {
			__html: `Engage web visitors with a relevant messaging and convert them with dynamic CTAs.
				<ul>
					<li>Dynamically personalize any element of any web page</li>
					<li>Deploy dynamic overlay CTAs</li>
					<li>Create account microsites</li>
				</ul>
			`.replace(/\t/g, ''),
		},
		icon: 'webPersonalizationIcon',
	},
	{
		name: 'Sales Activation',
		linkUrl: 'https://triblio.com/sales-plays/',
		mediaUrl:
			'https://triblio.com/wp-content/uploads/2018/11/triblio-sales-activation-compressed.mp4',
		descriptionHTML: {
			__html: `Activate sales outbounding that aligns with marketing campaigns and buyer interest.
				<ul>
					<li>Provide account purchase intent insights to sales</li>
					<li>Prioritize outbound sales activities by purchase intent</li>
					<li>Automate sales plays in CRM workflows</li>
				</ul>
			`.replace(/\t/g, ''),
		},
		icon: 'salesActivationIcon',
	},
	{
		name: 'Account Analytics',
		linkUrl: 'https://triblio.com/account-metrics/',
		mediaUrl:
			'https://triblio.com/wp-content/uploads/2018/11/account-analytics.svg',
		illustration: accountAnalyticsIllustration,
		descriptionHTML: {
			__html: `Prove the impact of ABM campaigns on target accounts by showing:
				<ul>
					<li>Campaign attribution and web analytics</li>
					<li>Progression of accounts through the sales funnel</li>
					<li>Pipeline and revenue performance of target account lists</li>
				</ul>
			`.replace(/\t/g, ''),
		},
		icon: 'accountAnalyticsIcon',
	},
];

export default features;
