const tg = window.Telegram.WebApp;

const products = [
    {id: '0', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '1', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '2', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '3', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '4', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '5', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '6', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '7', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]

const brands = [
    {id: '0', title: 'бренд1', price: 5000, description: 'Синего цвета, прямые'},
    {id: '1', title: 'бренд2', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '2', title: 'бренд3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '3', title: 'бренд4', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '4', title: 'бренд5', price: 5000, description: 'Синего цвета, прямые'},
    {id: '5', title: 'бренд6', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '6', title: 'бренд7', price: 5500, description: 'Синего цвета, прямые'},
    {id: '7', title: 'бренд8', price: 12000, description: 'Зеленого цвета, теплая'},
]


export function useTelegram() {

    const cururl = window.location.toString();
    const cururls = cururl.split("/");
    let newurl = "";
    for (let i = 0 ; i < cururls.length - 1 ; i++) {
        if (i === cururls.length - 1) {
            newurl += cururls[i]
        } else {
            newurl += cururls[i] + "/";
        }        
    }

    const onClose = () => {
        window.location.replace(newurl);
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        products,
        brands,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}
