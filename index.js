exports.twitate = function twitate(text) {
    const part = text.
        split('\n').
        map(part => part.split('')).
        reverse()
    const max = Math.max.apply(null, part.
        map(text => text.length))
    const res = []
    for (var i = 0; i < max; i++) {
        res[i] = part.map(text => text[i] || ' ').
            map(s =>
                s.replace(/[A-Za-z0-9]/g, s =>
                    String.fromCharCode(s.charCodeAt(0) + 0xFEE0))).
            map(s => s.replace(' ', String.fromCharCode(12288))).
            join('')
    }
    return res.join('\n')
}