user = {
    name: 'John Smith',
    email: 'js@somePretendEmail.com',
    posts: ["this","is","complicated","for","my","tiny brain"]
}
describe('First group of tests', () => {
    test('Jest is working', () => {
       expect(1).toBe(1);
    });
});

describe('Second group of tests', () => {
    test('returns a random number',()=>{
        const mockMath = Object.create(global.Math);
        mockMath.random = jest.fn(()=>0.75);
        global.Math = mockMath;
        const id = getNewId();
        expect(id).toBe(0.75)
    })
})
 
describe('Another group of tests', () => {
    // ...more tests here
});
 