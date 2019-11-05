
/** 封装localStorage */
var storage = {
    set(key,val){
        window.localStorage.setItem(key,JSON.stringify(val));
    },
    get(key){
        return JSON.stringify(window.localStorage.getItem(key));
    },
    remove(key){
        window.localStorage.removeItem(key);
    }
}
export default storage;
