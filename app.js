Vue.createApp({
    data() {
        return {
            countNum: 0
        }
    },
    computed: {
        countedResultText() {
            if (this.countNum < 37) {
                return 'Not there yet';
            } else if (this.countNum > 37) {
                return 'Too much!';
            } else {
                return 'You got me!';
            }
        }
    },
    watch: {
        countNum() {
            const vm = this;
            setTimeout(function() {
                vm.countNum = 0;
            }, 10000);
        }
    },
    methods: {
        addCount(num) {
            this.countNum = this.countNum + num;
        }
    }
}).mount('#assignment')