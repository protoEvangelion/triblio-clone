var navItems = [
	{
		name: 'Platform',
		mediaUrl: ' ',
		descriptionHTML: {
			__html: `
			<ul>
				<li class="nav-item"><a href="/account-based-marketing-software/">Product</a></li>
				<li class="nav-item"><a href="/account-based-marketing-solutions/">Solutions</a></li>
				<li class="nav-item"><a href="/account-based-marketing-examples/">Client Success</a></li>
			</ul>
		`.replace(/\t/g, ''),
		},
	},
	{
		name: 'Company',
		mediaUrl: ' ',
		illustration: 'audienceManagementIllustration',
		descriptionHTML: {
			__html: `
			<ul>
				<li class="nav-item"><a href="/about/">About Us</a></li>
				<li class="nav-item"><a href="/events/">Events</a></li>
				<li class="nav-item"><a href="/partner-program/">Partners</a></li>
			</ul>
			`.replace(/\t/g, ''),
		},
	},
	{
		name: 'Learn',
		mediaUrl: ' ',
		illustration: 'audienceManagementIllustration',
		descriptionHTML: {
			__html: `
			<ul>
				<li class="nav-item"><a href="/content-hub/">Content Hub</a></li>
				<li class="nav-item"><a href="/blog/">Blog</a></li>
				<li class="nav-item"><a href="/triblio-knowledge-base/">Resources</a></li>
			</ul>
			`.replace(/\t/g, ''),
		},
	},
];

export default navItems;
