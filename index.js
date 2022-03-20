// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr, str) {
    const newStr = str.toUpperCase()
    const filtered = arr.filter(el => {
        return el.toUpperCase() === newStr})
        return filtered
}


console.log(findMatching(drivers, "Bobby"))

function fuzzyMatch(arr, str) {
    const newStr2 = str.charAt(0)
    const fuzzy = arr.filter(el => {
        return el.charAt(0) === newStr2})
        return fuzzy
}

function matchName(arr, str) {
    const match = arr.filter(el => {
        return el.name === str
    })
    return match
}

