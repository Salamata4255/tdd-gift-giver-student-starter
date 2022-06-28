class GiftExchange {
    constructor() {
        this.super()
    }

    static pairs(names){
        if (names.length % 2 != 0){
            throw new Error('the mumber of names cannot be odd')
        }
         const namedPairs = []

         while(names.length) {
            const currPair = []
            while (currPair.length < 2){
                const idx = Math.floor(Math.random() * names.length)
                currPair.push(names[idx])
                names.splice(idx,1)
            }
            namedPairs.push(currPair)
         }
        
        return namedPairs;
    }


    static traditional(names){
        const pairs = this.pairs(names);
        const traditionalPairs = pairs.reduce((prev, item, idx) => {
            if (idx + 1 === pairs.length){
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`,
                    `${item[1]} is giving a gift to ${pairs[0][0]}`
                ]
            } else {
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`,
                    `${item[1]} is giving a gift to ${pairs[idx+1][0]}`
                ]
            }
        }, [])
        return traditionalPairs
    }
}

module.exports = GiftExchange