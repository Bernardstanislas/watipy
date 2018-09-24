import { observable, action, computed } from 'mobx';

import client from 'client';

export class CollectionStore {
    @observable collections = [];
    @observable clockLoading = false;
    @observable networkLoading = false;

    constructor(client) {
        this.client = client;
    }

    @action
    async fetchAll() {
        this.networkLoading = true;
        this.clockLoading = true;

        setTimeout(() => {
            this.clockLoading = false;
        }, 1500);

        const collections = await this.client.collection.fetchAll();

        this.networkLoading = false;
        this.collections = collections;
    }

    @computed
    get loading() {
        return this.clockLoading || this.networkLoading;
    }
}

export default new CollectionStore(client);
