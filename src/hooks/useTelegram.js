const tg = window.Telegram.WebApp;

const products = [
    [
        {id: '0', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
        {id: '1', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    ],
    [
        {id: '0', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
        {id: '1', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    ]
]

const brands = [
    {id: '0', title: 'бренд1', description: 'Очень хороший'},
    {id: '1', title: 'бренд2', description: 'Мегахороший'},
]


export function useTelegram() {

    const cururl = window.location.toString();
    const cururls = cururl.split("/");
    let newurl = "";
    for (let i = 0 ; i < cururls.length - 1 ; i++) {
        if (i === cururls.length - 2) {
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
