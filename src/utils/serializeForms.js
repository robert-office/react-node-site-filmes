
/// serialize a form and return all data, key => value
/// to send a API
export const serializeForm = (form) => {
    var obj = {};
    var formData = new FormData(form);
    for (var key of formData.keys()) {
        obj[key] = formData.get(key);
    }
    return JSON.stringify(obj);
}