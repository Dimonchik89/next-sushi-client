import { useState } from "react";

const useSumma = () => {
    const [summa, setSumma] = useState(0)

    const countSumma = (arr) => {
        setSumma(0)
        arr.forEach(item => {
            setSumma(summa => summa += (item.cost * item.qty))
        })
    }

    return { summa, countSumma}
}

export default useSumma;