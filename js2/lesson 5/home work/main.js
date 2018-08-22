class Http {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async request(path = '', method = 'get', data = {}) {
        try {
            return await fetch(`${this.baseUrl}/${path}` {
                method,
                body
            }).then(res => res.json());
        } catch(e) {
            console.error(e);
            return false;
        }
    }
}

class Cart {
    constructor(baseUrl) {
        const $http = new Http(baseUrl);
        $http.request();
    }
}

window.onload = () => {

}


