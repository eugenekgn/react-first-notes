/**
 * Created by Eugene on 1/18/16.
 */

export default class {
    constructor() {
        this._gitHubLinkTemplate = 'https://api.github.com/users/';
    }

    get gitHubLinkTemplate() {
        return this._gitHubLinkTemplate;
    }
}

