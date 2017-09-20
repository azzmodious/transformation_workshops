var workshopDetail = new Vue({
    el: '#workshop_detail',
    mitem: {name: 'bob'},
    data: {
        selectedItem: {name: 'bob'}
    }, 
    methods: {
        show: function(){
            //alert(JSON.stringify(workshopDetail.mitem));
            this.selectedItem = workshopDetail.mitem;
            $('#workshop_detail').modal('show');
        }
    },
    show: function(){
        //alert(JSON.stringify(mitem));
        $('#workshop_detail').modal('show');
    }
});

var workshops = new Vue({
    el: '#workshops', 
    methods: {
        select: function(item){
            selectedItem = item;
            workshopDetail.mitem = item;
            workshopDetail.show();
        }
    },
    data: {
        items: workshop_data
    }
});
