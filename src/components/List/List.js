import Methods from '../../services/methods'
export default {
    name: 'List',
    data: function() {
        return {
            items: [],
            filtrado: '',
        }
    },
    mounted() {
        let app = this;
        Methods.getList()
            .then(function(response) {
                app.items = response.data.message;
            })
            .catch(function(error) {
                console.log(error);
            })
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                return item.indexOf(this.filtrado.toLowerCase()) > -1
            })
        }
    }
}