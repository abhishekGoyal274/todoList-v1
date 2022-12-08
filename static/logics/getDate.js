module.exports.today = getDate;

function getDate() {
    const date = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    const today = date.toLocaleDateString("en-US", options);
    return today;
}