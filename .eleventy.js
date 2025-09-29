import { HtmlBasePlugin, RenderPlugin } from '@11ty/eleventy';

// import pluginNavigation from '@11ty/eleventy-navigation';
// import pluginRss from '@11ty/eleventy-plugin-rss';
// import pluginHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
// import pluginTOC from "eleventy-plugin-toc";

import markdownIt from 'markdown-it';
// import markdownItAttrs from 'markdown-it-attrs';
// import markdownItAnchor from 'markdown-it-anchor';
// import markdownItFigures from 'markdown-it-image-figures';

// import { DateTime } from 'luxon';

export default function (config) {

	// Custom Directory Paths
	config.setInputDirectory('src');
	config.setDataDirectory('_includes/_data');
	config.setOutputDirectory('build');
	config.addPassthroughCopy({'src/_': "."});
	config.addPassthroughCopy("src/img");

	// Shortcodes
	const md = markdownIt();
	config.addShortcode("markdown", (content) => md.render(content));

	// Plugins
	// config.addPlugin(pluginHighlight);
	// config.addPlugin(pluginNavigation);
	// config.addPlugin(pluginRss);
	// config.addPlugin(pluginTOC);
	config.addPlugin(HtmlBasePlugin);
	config.addPlugin(RenderPlugin);
};

export const config = {
	markdownTemplateEngine: 'njk'
};