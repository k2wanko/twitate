const twitate = require('./index').twitate

test('twitate online', () => {
    expect(twitate('twitter')).toBe(`ｔ
ｗ
ｉ
ｔ
ｔ
ｅ
ｒ`)
})

test('twitate mulitiline', () => {
    expect(twitate(`hello,
twitter`)).toBe(`ｔｈ
ｗｅ
ｉｌ
ｔｌ
ｔｏ
ｅ,
ｒ　`)
    expect(twitate(`hello,
twitter!
wow`)).toBe(`ｗｔｈ
ｏｗｅ
ｗｉｌ
　ｔｌ
　ｔｏ
　ｅ,
　ｒ　
　!　`)
    expect(twitate(`縦書きの
テスト`)).toBe(`テ縦
ス書
トき
　の`)
})