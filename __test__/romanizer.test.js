import {romanize} from "../src/romanizer";
describe('romanizer', () => {
    it('should return X when romanize 10', () => {

        expect('X').toEqual(romanize('10'));
    });

});