import 'whatwg-fetch';

const param2string = (params) => {
    let ps = Object.keys(params).map(key => {
        return `${key}=${params[key] || ''}`;
    })

    return ps.join('&');
}

class Ajax {
    static _request(url, options = {}) {
        // 携带 cookie
        options = Object.assign({
            credentials: 'include'
        }, options);

        return fetch(url, options).then((res) => {
            return res.json();
        }, (err) => {
            return {
                status: false,
                message: `内部错误，${err.message}。`
            };
        }).then((json) => {
            return json;
        });
    }

    static get(url, options = {}) {
        if (!url) { url = '/'};

        if (!options) {
            options = {};
        }

        options.method = 'GET';

        if (typeof options.params === 'object') {
            options.params = param2string(options.params);
        }
        if (options.params) {
            if (url.indexOf('?') < 0) {
                url += `?${options.params}`
            } else {
                url += `&${options.params}`
            }
        }
        

        delete options.params;

        return this._request(url, options);
    }

    static post(url, options = {}) {
        if (!url) { url = '/' }

        options.method = 'POST';

        options = Object.assign({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }, options);

        if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded' && typeof options.body === 'object') {
            options.body = param2string(options.body);
        }

        return this._request(url, options);
    }

    static postForm(url, options = {}) {
        if (!url) { url = '/'; }
        options.method = 'POST';
        let formData = new FormData();

        Object.keys(options.body).forEach(key => {
            formData.append(key, options.body[key])
        })

        options.body = formData;

        return this._request(url, options);
    }

    static postJSON(url, options = {}) {
        options.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        options.body = JSON.stringify(options.body);

        return this.post(url, options);
    }
}

export default Ajax;
