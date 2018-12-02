import Methods from '../../services/methods'
export default {
    data: function() {
        return {
            srcIMG: '',
            name: '',
        }
    },
    methods: {
        getIMG() {
            let app = this;
            Methods.getIMG(this.$route.params['name'])
                .then(function(response) {
                    app.srcIMG = response.data.message;
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
    },
    created() {
        this.getIMG();
        this.name = this.$route.params['name'];
    }
}