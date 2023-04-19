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


export function useTelegram() {

    const cururl = window.location.toString();
    const cururls = cururl.split("/");
    let newurl = "";
    for (let i = 0 ; i < cururls.length - 1 ; i++) {
        newurl += cururls[i] + "/";
    }
    const onClose = () => {
        alert(cururl + "\n" + "https://deft-smakager-c905a3.netlify.app/");
        
        if (cururl == "https://deft-smakager-c905a3.netlify.app/") {
            tg.close;
        } else {
            window.location.replace(newurl);
        }
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
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}
