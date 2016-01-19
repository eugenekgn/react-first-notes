/**
 * Created by Eugene on 1/18/16.
 */

import GitHubConfig from './github.config'

export default class GitHubModel {
    getData(userName) {
        var config = new GitHubConfig();
        var url = config.gitHubLinkTemplate + userName;
        return $.get(url);
    }
}