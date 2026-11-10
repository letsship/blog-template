import { defineSiteConfig } from "@lets-ship/site/config";

/**
 * The structure of this site. Every key is required. The site's name, description, colours and
 * fonts are not here: they come from brand/brand.dna.json. Schema: https://letsship.ai/schema/site.json
 */
export const site = defineSiteConfig({
	origin: "https://your-company.letsship.app",
	titleSeparator: "|",
	sections: {
		website: false,
		blog: {
			path: "/",
			content: "./content/posts",
			categories: [
				{ slug: "news", name: "News", title: "News", description: "What changed, and what comes next." },
				{ slug: "guides", name: "Guides", title: "Guides", description: "How to do one thing, step by step." },
			],
			authors: [{ name: "Your Name", path: "/", bio: "Writes this blog.", x: null }],
			feeds: true,
			layout: "magazine",
		},
		docs: false,
	},
	nav: [],
	header: { layout: "start", action: null },
	mdxComponents: [],
	footer: { layout: "columns", columns: [], social: "brand-links", badge: true },
	features: { search: true, markdownCopies: true, llms: true },
	integrations: { analytics: { provider: "none" } },
});
