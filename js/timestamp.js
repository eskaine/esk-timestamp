function timestamp() {
    var months = [
        'January',
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var data = {
        "unix": null,
        "natural": null
    };

    function * getDate(data) {
        let date = new Date(data);
        yield date.getTime();
        let year = date.getFullYear();
        let month = months[date.getMonth()];
        let day = date.getDate();

        return month + " " + day + ", " + year;
    }

    function getTimestamp(string) {

        let notDate = isNaN(Date.parse(string));
        let notInt = isNaN(parseInt(string));

        if (!notDate) {

            var it;

            if (notInt)
                it = getDate(string);
            else if (!notInt)
                it = getDate(Number(string));

            var date = it.next();
            data.unix = date.value;
            date = it.next();
            data.natural = date.value;
        }

        return data;

    }

    //api
    return {getTimestamp: getTimestamp}

}

module.exports = timestamp;
