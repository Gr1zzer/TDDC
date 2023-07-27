user = {
    name: 'John Smith',
    email: 'js@somePretendEmail.com',
    posts: ["this","is","complicated","for","my","tiny brain"]
}
// describe('First group of tests', () => {
//     test('Jest is working', () => {
//        expect(1).toBe(1);
//     });
// });
describe('Second group of tests', () => {
    function getRandomId() {
        return Math.floor(Math.random()); // convert to integer
    }
    test('returns an integer', () => {
       const id = getRandomId();
       expect(id).toBe(Math.floor(id))
    });
});
describe('Third group of tests', () => {
    function getNewId() {
        return Math.random()
    }
    test('returns a random number', () => {
        jest.spyOn(Math, 'floor'); // <--------------------changed
        const mockMath = Object.create(global.Math); 
        const globalMath = Object.create(global.Math);
        mockMath.random = () => 0.75;
        global.Math = mockMath;
        const id = getNewId();
        getNewId(); //<------------------------------------changed
        expect(Math.floor).toHaveBeenCalledWith(0.75); //<-changed
        global.Math = globalMath;
    });
    
})
describe('Another group of tests', () => {
    // ...more tests here
});
 