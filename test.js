const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { expect } = require('chai');

describe('index.html', () => {
    let dom;
    let document;

    before(() => {
        const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    it('should have a <head> element', () => {
        const head = document.querySelector('head');
        expect(head).to.not.be.null;
    });

    it('should have a <body> element', () => {
        const body = document.querySelector('body');
        expect(body).to.not.be.null;
    });

    it('should contain a <title> element in <head>', () => {
        const title = document.querySelector('head > title');
        expect(title).to.not.be.null;
        expect(title.textContent).to.be.a('string').that.is.not.empty;
    });

    it('should contain a link to the stylesheet in <head>', () => {
        const link = document.querySelector('head > link[rel="stylesheet"]');
        expect(link).to.not.be.null;
        expect(link.href).to.match(/styles\.css$/);
    });

    it('should contain a script tag in <body>', () => {
        const script = document.querySelector('body > script');
        expect(script).to.not.be.null;
        expect(script.src).to.match(/index\.js$/);
    });
});