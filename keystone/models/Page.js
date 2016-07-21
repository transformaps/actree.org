var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Page = new keystone.List('Page', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
});

Page.add({
    title: { type: String, required: true },
    // slug: { type: String, required: true, unique: true },
    content: { type: Types.Markdown, height: 600 }

});

Page.schema.virtual('content.full').get(function () {
    return this.content.extended.html || this.content.brief;
});

Page.defaultColumns = 'title, slug|20%, publishedDate|20%';
Page.register();
