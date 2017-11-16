class CustomDate {
    constructor (){
        this._delay = 400;
        this.content = document.querySelector('.content');
        this._action;
    }

    _ModDate(modificate) {
        let options = {};
        switch (modificate) {
            case 'fullTime':
                options.hour = 'numeric';
                options.minute = 'numeric';
                options.second = 'numeric';
                break;
            case 'shortTime':
                options.hour = 'numeric';
                options.minute = 'numeric';
                break;
            case 'Date':
                options.year = 'numeric';
                options.month = 'long';
                options.day= 'numeric';
                break;
        }
        let date = new Date;
        return date.toLocaleString("ru", options);
    }

    _actionTime() {
        this._action = setInterval(function () {
            this._print(this._ModDate('fullTime'));
        }.bind(this), this._delay);
    }

    _actionClick() {
        this.content.addEventListener('mousedown', function (event) {
            switch (event.which) {
                case 1:
                    clearInterval(this._action);
                    this._print(this._ModDate('shortTime'));
                    break;
                case 2:
                    this._actionTime();
                    break;
                case 3:
                    this._print(this._ModDate('Date'));
                    clearInterval(this._action);
                    break;
            }
        }.bind(this));
    }

    _print(f) {
        this.content.innerHTML = f;
    }
    run() {
        this._actionTime();
        this._actionClick();
    }
}

let time = new CustomDate().run();