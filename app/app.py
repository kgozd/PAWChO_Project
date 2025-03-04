from flask import Flask, render_template, request, jsonify, make_response, redirect, url_for
import json
import os

app = Flask(__name__)

def get_language():
    lang = request.args.get('lang')
    
    if lang:
        resp = make_response(redirect(request.path))
        resp.set_cookie('lang', lang)
        return lang, resp
    
    lang = request.cookies.get('lang')
    
    if not lang:
        lang = 'pl'
    
    return lang, None

def load_translations(section):
    lang, resp = get_language()
    translations_file = f'translations/{lang}.json'
    
    if os.path.exists(translations_file):
        with open(translations_file, 'r') as f:
            translations = json.load(f)
    else:
        translations = {}
    
    section_translations = translations.get(section, {})
    
    return section_translations, resp

@app.route('/')
def index():
    translations, resp = load_translations('index')
    if resp:
        return resp
    
    return render_template('index.html', translations=translations)

@app.route('/contact')
def contact():
    translations, resp = load_translations('contact')
    if resp:
        return resp
    
    return render_template('contact.html', translations=translations)

@app.route('/documents')
def documents():
    translations, resp = load_translations('documents')
    if resp:
        return resp
    
    return render_template('documents.html', translations=translations)

@app.route('/services')
def services():
    translations, resp = load_translations('services')
    if resp:
        return resp
    
    return render_template('services.html', translations=translations)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
