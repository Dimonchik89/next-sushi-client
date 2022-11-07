
const usePush = () => {
    const delay = 1000 * 10;

    const myNotify = (item) => {
        let image;
        if(item?.img) {
            image = JSON.parse(item.img)[0]
        }
        const notify = new Notification("New offer for you", {
            body: item.name,
            icon: `${process.env.NEXT_PUBLIC_IMAGE_PATH}${image}.png`
        })
    }

    const notifySet = (item) => {
        if(!("Notification" in window)) {
            alert("Your browser do not support Push")
        } else if(Notification.permission === "granted") {
            myNotify(item)
        } else if(Notification.permission !== "denied") {
            Notification.requestPermission((permission) => {
                if(!("permission" in Notification)) {
                    Notification.permission = permission;
                } if(Notification.permission === "granted") {
                    myNotify(item)
                }
            })
        }
    }

    const showNotify = (products) => {
        products.forEach((item, i) => {
            setTimeout(() => notifySet(item), delay * (i + 1))
        })
    }

    return {showNotify}
}

export default usePush;