const getDataFromDb = () => {
  return  JSON.parse(localStorage.getItem("Cart_data"))
}

const setDataInDb = (id) => {
    let storage = {}
    let storedData = getDataFromDb();
    if (!storedData) {
        storage[id] = 1;
    } else {
        storage = storedData;
        if (storage[id]) {
            storage[id] = storage[id] + 1;
        } else {
            storage[id] = 1;
        }
    }

    localStorage.setItem("Cart_data", JSON.stringify(storage));
}

export {getDataFromDb,setDataInDb}