describe('stringmatching',()=>{
    const expectedemail = [
        expect.stringMatching(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    ];
    const expectedpassword = [
        expect.stringMatching(/^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/),
    ];
    const expectedename = [
        expect.stringMatching(/^[a-zA-Z ]{2,30}$/), 
    ];
    const expectedemobile = [
        expect.stringMatching(/^[0-9]{2,3}-[0-9]{10}/),
    ];
    const expectedid = [
        expect.stringMatching(/^[a-zA-Z ]{2,30}$/),
    ];
    it('matches',()=>{
        expect(['souvik199831@gmail.com']).toEqual(
            expect.arrayContaining(expectedemail), 
        );
    });
    it(' Doesnotmatches',()=>{
        expect(['souvik199831gmail.com']).not.toEqual(
            expect.arrayContaining(expectedemail), 
        );
    });
    it('matches',()=>{
        expect(['XxD48r#hjK2vca9wj']).toEqual(
            expect.arrayContaining(expectedpassword),
        );
    });
    it(' Doesnotmatches',()=>{
        expect(['1234']).not.toEqual(
            expect.arrayContaining(expectedpassword),
        );
    });
    it('matches',()=>{
        expect(['Souvik']).toEqual(
            expect.arrayContaining(expectedename),
        );
    });
    it(' Doesnotmatches',()=>{
        expect(['1234']).not.toEqual(
            expect.arrayContaining(expectedename),
        );
    });
    it('matches',()=>{
        expect(['91-7550167198']).toEqual(
            expect.arrayContaining(expectedemobile),
        );
    });
    it(' Doesnotmatches',()=>{
        expect(['456']).not.toEqual(
            expect.arrayContaining(expectedemobile),
        );
    });
    it('matches',()=>{
        expect(['ci']).toEqual(
            expect.arrayContaining(expectedid),
        );
    });
    it(' Doesnotmatches',()=>{
        expect(['c']).not.toEqual(
            expect.arrayContaining(expectedid),
        );
    });
})