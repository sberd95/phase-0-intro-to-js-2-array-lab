// Write your solution here!
const cats = ["Milo", 'Otis', 'Garfield']
function destructivelyAppendCat(name) {
    return cats.push(name)
}
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(name) {
    const tempCats = [...cats.slice(), name]
    return tempCats
}
function prependCat(name) {
    const tempCats = [name, ...cats.slice()]
    return tempCats
}
function removeLastCat() {
    const tempCats = [...cats.slice(0, -1)]
    return tempCats
}
function removeFirstCat() {
    const tempCats = [...cats.slice(1)]
    return tempCats
}