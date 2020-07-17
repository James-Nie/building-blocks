var vm = new Vue({
    el: '#app',
    data: {
        currModel: '',
        transferData: {},
        comRenderList: [],
        comList: []
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(data) {
            this.transferData = JSON.parse(JSON.stringify(data));
        },
        drop(ev) {
            ev.preventDefault();
            this.transferData.id = Date.now()
            this.comRenderList = this.comRenderList.concat([this.transferData])
        },
        handleClick(data) {
            this.currModel = data;
            console.log('currModel:', this.currModel)
        },
        deleteComponent(data) {
            this.comRenderList = this.comRenderList.filter((item) => {
                return item.id !== data.id
            })
        },
        submit() {
            console.log(this.comRenderList)
        }
    },
    created() {
        fetch('mock.json').then((res) => {
            return res.json()
        }).then((myJson) => {
            this.comList = myJson;
            console.log(myJson)
        });
    }
})