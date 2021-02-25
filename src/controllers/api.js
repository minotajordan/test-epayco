import 'isomorphic-fetch'

class Api {
    async getCountry () {
        const response = await fetch('https://restcountries.eu/rest/v2/all', {
            method: 'GET',
        })
        if (response.status !== 200) return { error: '@error.response', status: response.status }
        return await response.json()
    }

    async getTerminos (score, comment, id) {
        const response = await fetch(`${this.base_url_api}/api-terminos`, {
            method: 'POST',
            headers: { ...this.header_basic },
            body: JSON.stringify(id ? { score, comment, sid: this.sid, token: this.createToken(this.sid) } : { score, comment, id, sid: this.sid, token: this.createToken(this.sid) })
        })
        if (response.status !== 200) return { error: '@error.response', status: response.status }
        return await response.json()
    }
}

export default new Api()
