const findShortestPath = require('../src/api/controllers/graphController');

describe('Test Path', () => {
    it('should return the distance', () => {
        const res = findShortestPath("A", "B");

        console.log('dist: ', res.distance);

        expect(res.distance).toEqual(5);
    })
})

describe('Worng Path Test', () => {
    it('should return error', () => {
        const res = findShortestPath("A", "G");

        //console.log('path: ', res.path);
        console.log('dist: ', res.distance);

        expect(res.distance).toEqual("Infinity");
    })
})