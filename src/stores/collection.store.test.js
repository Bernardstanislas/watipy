import { CollectionStore } from './collection.store';
import { when } from 'mobx';

jest.useFakeTimers();

describe('The collection store', () => {
    it('it waits 1.5 seconds before stopping loading', done => {
        const client = {
            collection: {
                fetchAll: jest.fn(() => Promise.resolve([]))
            }
        };

        const store = new CollectionStore(client);

        expect(store.loading).toEqual(false);
        store.fetchAll();
        expect(store.loading).toEqual(true);

        jest.runAllTimers();

        when(
            () => {
                return !store.networkLoading && !store.clockLoading;
            },
            () => {
                expect(store.loading).toEqual(false);
                done();
            }
        );
    });
});
